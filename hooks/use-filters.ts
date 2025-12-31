import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSet } from "react-use";
import qs from "qs";
import { useDebouncedValue } from "./useDebouncedValue";

export type FiltersForUrl = {
  minPrice?: number;
  maxPrice?: number;
  ingredients?: string[];
  pizzaTypes?: string[];
  sizes?: string[];
};

export const useFilters = (debounceMs = 300) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const parse = (key: string) => {
    const v = searchParams?.get(key);
    if (!v) return [];
    return v === "" ? [] : v.split(",").filter(Boolean);
  };

  const [ingredientsSet, ingredientsActions] = useSet(
    new Set(parse("ingredients"))
  );
  const [pizzaTypesSet, pizzaTypesActions] = useSet(
    new Set(parse("pizzaTypes"))
  );
  const [sizesSet, sizesActions] = useSet(new Set(parse("sizes")));

  const [sliderValue, setSliderValue] = useState<[number, number]>(() => {
    const min = Number(searchParams?.get("minPrice") ?? 0);
    const max = Number(searchParams?.get("maxPrice") ?? 1000);
    return [isNaN(min) ? 0 : min, isNaN(max) ? 1000 : max];
  });

  const minPrice = sliderValue[0];
  const maxPrice = sliderValue[1];

  const debouncedIngredients = useDebouncedValue(
    Array.from(ingredientsSet),
    debounceMs
  );
  const debouncedPizzaTypes = useDebouncedValue(
    Array.from(pizzaTypesSet),
    debounceMs
  );
  const debouncedSizes = useDebouncedValue(Array.from(sizesSet), debounceMs);
  const debouncedPrices = useDebouncedValue(
    [minPrice, maxPrice] as [number, number],
    debounceMs
  );

  const filtersForUrl = useMemo<FiltersForUrl>(() => {
    const [dMin, dMax] = debouncedPrices;
    const base: FiltersForUrl = {
      minPrice: dMin,
      maxPrice: dMax,
      ingredients: debouncedIngredients.length
        ? debouncedIngredients
        : undefined,
      pizzaTypes: debouncedPizzaTypes.length ? debouncedPizzaTypes : undefined,
      sizes: debouncedSizes.length ? debouncedSizes : undefined,
    };
    return base;
  }, [
    debouncedIngredients,
    debouncedPizzaTypes,
    debouncedSizes,
    debouncedPrices,
  ]);

  const prevQueryRef = useRef<string>("");

  useEffect(() => {
    const query = qs.stringify(filtersForUrl, {
      arrayFormat: "comma",
      skipNulls: true,
    });
    if (query !== prevQueryRef.current) {
      prevQueryRef.current = query;
      router.push(`?${query}`, { scroll: false });
    }
  }, [filtersForUrl]);

  const resetAll = () => {
    ingredientsActions.clear();
    pizzaTypesActions.clear();
    sizesActions.clear();
    setSliderValue([0, 1000]);
    router.push(`/`, { scroll: false });
  };

  const toggleIngredient = (id: string) => ingredientsActions.toggle(id);
  const togglePizzaType = (id: string) => pizzaTypesActions.toggle(id);
  const toggleSize = (id: string) => sizesActions.toggle(id);

  const handleMinInputChange = (newMin: number) => {
    const clampedMin = Math.max(0, Math.min(newMin, sliderValue[1]));
    setSliderValue([clampedMin, sliderValue[1]]);
  };

  const handleMaxInputChange = (newMax: number) => {
    const clampedMax = Math.max(sliderValue[0], Math.min(newMax, 1000));
    setSliderValue([sliderValue[0], clampedMax]);
  };

  return {
    ingredientsSet,
    pizzaTypesSet,
    sizesSet,

    toggleIngredient,
    togglePizzaType,
    toggleSize,
    resetAll,

    sliderValue,
    setSliderValue,
    minPrice,
    maxPrice,
    handleMinInputChange,
    handleMaxInputChange,
  };
};

export default useFilters;
