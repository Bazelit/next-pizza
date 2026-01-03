import ProductImage from "@/components/shared/product-image";
import prisma from "@/prisma/prisma-client";
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

  return <div className="mx-auto max-w-[1280px] flex flex-col my-10">
    <ProductImage src={product.imageUrl} />
  </div>;
}
