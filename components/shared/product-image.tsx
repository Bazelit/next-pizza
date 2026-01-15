import clsx from "clsx";

interface IProductImageProps {
  imageUrl: string;
  size: number;
}

const ProductImage: React.FC<IProductImageProps> = ({ imageUrl, size }) => {
  return (
    <div className="flex items-center justify-center flex-1 relative w-full">
      <img
        src={imageUrl}
        alt="Product"
        className={clsx(
          "relative left-2 top-2 transition-all z-10 duration-300",
          size === 20 && "w-[300px] h-[300px]",
          size === 30 && "w-[400px] h-[400px]",
          size === 40 && "w-[500px] h-[500px]",
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-default-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-default-200 w-[370px] h-[370px]" />
    </div>
  );
};

export default ProductImage;
