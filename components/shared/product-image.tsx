interface IProductImageProps {
  imageUrl: string;
  size: number;
}

const ProductImage: React.FC<IProductImageProps> = ({ imageUrl, size }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Logo"
        className={
          ("relative left-2 top-2 transition-all z-10 duration-300",
          {
            "w-[300px] h-[300px]": size === 20,
            "w-[400px] h-[400px]": size === 30,
            "w-[500px] h-[500px]": size === 40,
          })
        }
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 b"></div>
    </div>
  );
};

export default ProductImage;
