import Filters from "@/components/filters";
import ProductsGroupList from "@/components/products-group-list";
import { Title } from "@/components/title";
import TopBar from "@/components/top-bar";

export default function Home() {
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
                <ProductsGroupList
                  title="Пиццы"
                  items={[
                    {
                      id: 1,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                    {
                      id: 2,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                    {
                      id: 3,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                  ]}
                  categoryId={1}
                />
                <ProductsGroupList
                  title="Комбо"
                  items={[
                    {
                      id: 1,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                    {
                      id: 2,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                    {
                      id: 3,
                      name: "Чизбургер",
                      ingredients:
                        "Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо",
                      imageUrl:
                        "https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif",
                      items: [{ price: 550 }],
                    },
                  ]}
                  categoryId={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
