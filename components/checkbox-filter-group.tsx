"use state";

import { Input } from "@heroui/input";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { useState } from "react";
import { Button } from "@heroui/button";

type Item = FilterChecboxProps;

interface CheckboxFilterGroupProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

const CheckboxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}: CheckboxFilterGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  return (
    <>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}

      <div className="felx flex-col space-y-1 mb-4">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            checked={false}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <Button
          className="text-primary bg-transparent"
          onPress={() => setShowAll(!showAll)}
        >
          {showAll ? "Скрыть все ингредиенты" : "Показать все ингредиенты"}
        </Button>
      )}
    </>
  );
};

export default CheckboxFilterGroup;
