"use state";

import { Input } from "@heroui/input";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Skeleton } from "@heroui/skeleton";

type Item = FilterChecboxProps;

interface CheckboxFilterGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  isLoading?: boolean;
  limit?: number;
  selectedIds?: Set<string>;
  searchInputPlaceholder?: string;
  className?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  name?: string;
}
console.log("hello wro");

const CheckboxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  isLoading,
  onClickCheckbox,
  defaultValue,
  selectedIds,
  name,
}: CheckboxFilterGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  if (isLoading) {
    return (
      <div>
        <p className="font-bold mb-3">{title}</p>
        {...new Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}
        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

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
            checked={selectedIds?.has(item.value)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
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
