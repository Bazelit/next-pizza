import Filters from "@/components/shared/filters";
import ProductsGroupList from "@/components/shared/products-group-list";
import { Title } from "@/components/ui/title";
import TopBar from "@/components/shared/top-bar";
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
          <Title className="font-extrabold mb-6" size="lg" text="Все пиццы" />
        </div>
        <TopBar />
        <div className="mx-auto max-w-[1280px] mt-10 pb-14">
          <div className="flex gap-[60px] items-start">
            <div className="w-[250px] flex-shrink-0 max-md:hidden">
              <Filters />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-16">
                {categories.map((category) => (
                  <ProductsGroupList
                    key={category.id}
                    categoryId={category.id}
                    items={category.products}
                    title={category.name}
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
