import Categories from "@/components/categories";
import SortPopup from "@/components/sort-popup";

const TopBar = () => {
  return (
    <div className="backdrop-blur-sm bg-white/30 border-1 border-default/50 px-2 py-5 rounded-4xl flex items-center justify-between sticky top-3 z-10">
      <Categories />
      <SortPopup />
    </div>
  );
};

export default TopBar;
