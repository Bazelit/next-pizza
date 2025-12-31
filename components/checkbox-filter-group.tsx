"use client";

import { Input } from "@heroui/input";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Skeleton } from "@heroui/skeleton";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

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
  name?: string;
}

const CheckboxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  isLoading,
  onClickCheckbox,
  selectedIds,
  name,
}: CheckboxFilterGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 250);

  if (isLoading) {
    return (
      <div className={""}>
        <p className="font-bold mb-3">{title}</p>
        {new Array(limit).fill(0).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
        ))}
        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className="">
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}

      <div className="flex flex-col space-y-1 mb-4">
        {list.map((item) => (
          <FilterCheckbox
            key={item.value}
            checked={selectedIds ? selectedIds.has(item.value) : false}
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
          onPress={() => setShowAll((s) => !s)}
        >
          {showAll ? "Скрыть все" : "Показать все"}
        </Button>
      )}
    </div>
  );
};

export default CheckboxFilterGroup;
