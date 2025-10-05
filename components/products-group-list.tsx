import ProductCard from "./product-card";
import { Title } from "./title";

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
  return (
    <div>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-3">
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
