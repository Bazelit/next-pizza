"use client";

import { Title } from "./title";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Drawer } from "vaul";

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
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Card key={id} isPressable shadow="sm">
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
                    {ingredient.name + ", "}
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
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-white dark:bg-[#191918] flex flex-col z-50 rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white dark:bg-[#191918] rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-gray-300 dark:bg-gray-500"
            />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-lg">
                Drawer for React.
              </Drawer.Title>
              <p className="text-[#52525b] dark:text-[#b5b3ad] mb-2">
                This component can be used as a Dialog replacement on mobile and
                tablet devices. You can read about why and how it was built{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://emilkowal.ski/ui/building-a-drawer-component"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ProductCard;
