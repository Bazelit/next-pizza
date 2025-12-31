"use client";

import React from "react";
import { Input } from "@heroui/input";
import { Title } from "./title";
import { Slider } from "@heroui/slider";
import CheckboxFilterGroup from "./checkbox-filter-group";
import { useIngredients } from "@/hooks/use-ingredients";
import useFilters from "@/hooks/use-filters";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

const Filters = () => {
  const { ingredients, isLoading } = useIngredients();
  const router = useRouter();

  const {
    ingredientsSet,
    pizzaTypesSet,
    sizesSet,
    toggleIngredient,
    togglePizzaType,
    toggleSize,
    sliderValue,
    setSliderValue,
    minPrice,
    maxPrice,
    handleMinInputChange,
    handleMaxInputChange,
    resetAll,
  } = useFilters(300);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Title size="sm" text="Фильтрация" className="mb-0 font-bold" />
        <Button color={"danger"} variant={"light"} onPress={resetAll}>
          Сбросить
        </Button>
      </div>

      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaTypes"
        limit={6}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Толстое", value: "2" },
        ]}
        onClickCheckbox={togglePizzaType}
        selectedIds={pizzaTypesSet}
      />

      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        limit={6}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={toggleSize}
        selectedIds={sizesSet}
      />

      <div className="mt-5 border-t border-t-default py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            value={String(minPrice)}
            placeholder="0"
            min={0}
            max={1000}
            onValueChange={(val) => handleMinInputChange(Number(val))}
          />
          <Input
            type="number"
            value={String(maxPrice)}
            placeholder="1000"
            min={0}
            max={1000}
            onValueChange={(val) => handleMaxInputChange(Number(val))}
          />
        </div>

        <div className="mb-6">
          <Slider
            className="max-w-md"
            formatOptions={{ style: "currency", currency: "RUB" }}
            label="Выберите цену"
            showTooltip={true}
            minValue={0}
            maxValue={1000}
            value={sliderValue}
            onChange={(val) => setSliderValue(val as [number, number])}
          />
        </div>

        <CheckboxFilterGroup
          title="Ингредиенты"
          name="ingredients"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          isLoading={isLoading}
          onClickCheckbox={toggleIngredient}
          selectedIds={ingredientsSet}
        />
      </div>
    </div>
  );
};

export default Filters;
