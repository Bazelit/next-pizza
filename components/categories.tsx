import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Categories = () => {
  const cats = ["Пицца", "Комбо", "Закуски", "Кофе", "Напитки", "Десерты"];
  const activeIndex = 0;

  return (
    <div className="inline-flex gap-1 bg-default p-1 rounded-2xl">
      {cats.map((cat,index) => (
        <Button color={activeIndex===index ? 'primary' : 'default'} key={index} as={Link} href="#">
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
