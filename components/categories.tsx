"use client";

import { useCategoryStore } from "@/store/category";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Categories = () => {
  const cats = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Завтрак" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Напитки" },
  ];
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className="inline-flex gap-1 bg-default p-1 rounded-2xl">
      {cats.map(({ id, name }) => (
        <Button
          color={categoryActiveId === id ? "primary" : "default"}
          onPress={() => useCategoryStore.getState().setActiveId(id)}
          key={id}
          as={Link}
          href={`/#${name}`}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};
export default Categories;
