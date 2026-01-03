"use client";

import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/ui/icons";
import { useState, useRef } from "react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Skeleton } from "@heroui/skeleton";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        setIsLoading(true);
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 h-[100vh] bg-black/60 z-50" />
      )}
      <Input
        ref={ref}
        aria-label="Search"
        onFocus={() => setFocused(true)}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        className="w-full z-50"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        labelPlacement="outside"
        placeholder="Поиск..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />

      <div
        className={`absolute w-[616px] backdrop-blur-sm bg-default rounded-xl py-2  top-16 shadow-md transition-all duration-200 invisible opacity-0
z-[52] ${focused && "visible opacity-100 top-12"}`}
      >
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center mb-2">
              <Skeleton className="w-[32px] mx-auto px-5 py-2 h-11 rounded-[8px]" />
              <Skeleton className="w-[88%] mx-auto px-5 py-2 h-11 rounded-[8px]" />
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              onClick={onClickItem}
              href={`/product/${product.id}`}
              className="flex items-center gap-3 w-full px-3 py-2 transition-all duration-250 hover:bg-primary/10"
            >
              <Image
                src={product.imageUrl}
                width={32}
                height={32}
                alt={product.name}
              />
              <span>{product.name}</span>
            </Link>
          ))
        ) : (
          <span className="px-3 py-2">Ничего не найдено</span>
        )}
      </div>
    </>
  );
};

export default SearchInput;
