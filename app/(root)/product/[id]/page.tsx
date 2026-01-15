import GroupVariants from "@/components/shared/group-variants";
import ProductImage from "@/components/shared/product-image";
import { Title } from "@/components/ui/title";
import prisma from "@/prisma/prisma-client";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-[1280px] flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px]  p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <GroupVariants
            items={[
              { name: "Маленкая", value: "1" },
              { name: "Средняя", value: "2", disabled: true },
              { name: "Большая", value: "3" },
            ]}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quis quod mollitia voluptates nemo veniam rem ab voluptatem ducimus.
            Facere nam tempora culpa rerum veritatis quis iure, ullam cupiditate
            officiis?
          </p>
          <Button color="primary">
            <Plus size={20} className="mr-1" />
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
}
