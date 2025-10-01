import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { ArrowRight, ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <Button color="primary">
      <b>100 ₽</b>
      <Divider className="h-5" orientation="vertical" />
      <div className="flex items-center gap-1 transition duration-200 group-hover:opacity-0">
        <ShoppingCart size={16} className="relative" strokeWidth={2} />
        <b>3</b>
      </div>
      <ArrowRight size={20} className="absolute right-5 transition duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
    </Button>
  );
};

export default CartButton;
