"use client";

import { Input } from "@heroui/input";
import { Title } from "./title";
import { Slider } from "@heroui/slider";
import { SliderValue } from "@heroui/slider";
import { useEffect, useState } from "react";
import CheckboxFilterGroup from "./checkbox-filter-group";
import { useIngredients } from "@/hooks/use-ingredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface QueryFilters {
  sizes: string;
  pizzaTypes: string;
  ingredients: string;
}

const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ingredients, isLoading, onAddId, selectedIds } = useIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [value, setValue] = useState<SliderValue>([0, 1000]);

  const minPrice = Array.isArray(value) ? value[0] : 0;
  const maxPrice = Array.isArray(value) ? value[1] : value;

  const filters = {
    minPrice,
    maxPrice,
    ingredients,
    pizzaTypes: Array.from(pizzaTypes),
    sizes: Array.from(sizes),
  };

  useEffect(() => {
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters]);

  const handleMinInputChange = (newMin: number) => {
    const clampedMin = Math.max(0, Math.min(newMin, maxPrice));
    setValue([clampedMin, maxPrice]);
  };

  const handleMaxInputChange = (newMax: number) => {
    const clampedMax = Math.max(minPrice, Math.min(newMax, 1000));
    setValue([minPrice, clampedMax]);
  };

  return (
    <div>
      <Title size="sm" text="Фильтрация" className="mb-5 font-bold" />
      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mt-5"
        limit={6}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Толстое", value: "2" },
        ]}
        onClickCheckbox={togglePizzaTypes}
        selectedIds={pizzaTypes}
      />
      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mt-5"
        limit={6}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={toggleSizes}
        selectedIds={sizes}
      />

      {/* <div className="felx flex-col space-y-1">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div> */}

      <div className="mt-5 border-t border-t-default py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            value={minPrice.toString()}
            placeholder="0"
            min={0}
            max={1000}
            onValueChange={(val) => handleMinInputChange(Number(val))}
          />
          <Input
            type="number"
            value={maxPrice.toString()}
            placeholder="1000"
            min={100}
            max={1000}
            onValueChange={(val) => handleMaxInputChange(Number(val))}
          />
        </div>
        <div className="border-b border-b-default pb-6 flex flex-col gap-2 w-full mb-5 h-full max-w-md items-start justify-center">
          <Slider
            className="max-w-md"
            formatOptions={{
              style: "currency",
              currency: "RUB",
            }}
            label="Выберите цену"
            showTooltip={true}
            minValue={0}
            maxValue={1000}
            value={value}
            onChange={setValue}
          />
        </div>

        <CheckboxFilterGroup
          title="Ингредиенты"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          isLoading={isLoading}
          onClickCheckbox={onAddId}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};

export default Filters;
