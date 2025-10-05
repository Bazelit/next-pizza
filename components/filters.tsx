"use client";

import { Input } from "@heroui/input";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";
import { Slider } from "@heroui/slider";
import { SliderValue } from "@heroui/slider";
import { useState } from "react";
import CheckboxFilterGroup from "./checkbox-filter-group";

const Filters = () => {
  const [value, setValue] = useState<SliderValue>([100, 500]);

  const minPrice = Array.isArray(value) ? value[0] : 0;
  const maxPrice = Array.isArray(value) ? value[1] : value;

  const handleMinInputChange = (newMin: number) => {
    const clampedMin = Math.max(0, Math.min(newMin, maxPrice));
    setValue([clampedMin, maxPrice]);
  };

  const handleMaxInputChange = (newMax: number) => {
    const clampedMax = Math.max(minPrice, Math.min(newMax, 1000));
    setValue([minPrice, clampedMax]);
  };

  const formatCurrency = (value: number) => {
    return `${value} ₽`;
  };

  return (
    <div>
      <Title size="sm" text="Фильтрация" className="mb-5 font-bold" />
      <div className="felx flex-col space-y-1">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

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
          className="mt-5"
          limit={6}
          defaultItems={[
            {
              text: "Сырный соус",
              value: "1",
            },
            {
              text: "Моццарелла",
              value: "2",
            },
            {
              text: "Чеснок",
              value: "3",
            },
            {
              text: "Солённые огурчики",
              value: "4",
            },
            {
              text: "Красный лук",
              value: "5",
            },
            {
              text: "Томаты",
              value: "6",
            },
          ]}
          items={[
            {
              text: "Сырный соус",
              value: "1",
            },
            {
              text: "Моццарелла",
              value: "2",
            },
            {
              text: "Чеснок",
              value: "3",
            },
            {
              text: "Солённые огурчики",
              value: "4",
            },
            {
              text: "Красный лук",
              value: "5",
            },
            {
              text: "Томаты",
              value: "6",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Filters;
