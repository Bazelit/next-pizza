import Filters from "@/components/filters";
import ProductsGroupList from "@/components/products-group-list";
import { Title } from "@/components/title";
import TopBar from "@/components/top-bar";
import prisma from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <div>
        <div className="mx-auto max-w-[1280px]">
          <Title text="Все пиццы" size="lg" className="font-extrabold mb-6" />
        </div>
        <TopBar />
        <div className="mx-auto max-w-[1280px] mt-10 pb-14">
          <div className="flex gap-[60px] items-start">
            <div className="w-[250px] flex-shrink-0">
              <Filters />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-16">
                {categories.map((category) => (
                  <ProductsGroupList
                    key={category.id}
                    categoryId={category.id}
                    title={category.name}
                    items={category.products}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
