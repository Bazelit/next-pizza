"use client";

import { useEffect, useRef } from "react";
import { Title } from "../ui/title";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import ProductCard from "../ui/product-card";

interface IProductsGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
}

const ProductsGroupList = ({
  title,
  items,
  categoryId,
}: IProductsGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.7,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {items.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.items[0].price}
            ingredients={product.ingredients}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
