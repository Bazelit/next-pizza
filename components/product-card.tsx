"use client";

import { Title } from "./title";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Drawer from "./drawer";
import { useState } from "react";

interface IIngradient {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface IProductCardProps {
  id: number;
  name: string;
  price: number;
  ingredients: IIngradient[];
  imageUrl: string;
}

const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
}: IProductCardProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Card
        key={id}
        isPressable
        shadow="sm"
        onPress={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={name}
            className="w-full object-cover bg-default-100"
            radius="lg"
            shadow="sm"
            src={imageUrl}
            width="100%"
          />
          <div className="px-3">
            <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
            <div>
              {ingredients.map((ingredient) => (
                <span key={ingredient.id} className="text-sm text-gray-400">
                  {ingredient.name + " "}
                </span>
              ))}
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex justify-between items-center mt-4">
          <p className="text-[20px]">
            от <b>{price}</b> ₽
          </p>
          <Button color="primary">
            <Plus size={20} className="mr-1" /> Добавить
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
