import Categories from "@/components/shared/categories";
import SortPopup from "@/components/ui/sort-popup";
import FiltersButton from "../ui/filters-button";

const TopBar = () => {
  return (
    <>
      <div className="backdrop-blur-sm bg-gray-400/20 border-1 border-default/50 px-2 py-5 rounded-4xl flex items-center justify-between sticky top-3 z-25 max-md:flex-col gap-5 max-md:static max-md:hidden">
        <Categories />
        <SortPopup />
      </div>

      <div className="md:hidden">
        <div className="backdrop-blur-sm bg-gray-400/20 border-1 border-default/50 px-2 py-3 rounded-4xl overflow-x-auto mb-3">
          <Categories />
        </div>
        <div className="flex items-center justify-between gap-5">
          <SortPopup />
          <FiltersButton />
        </div>
      </div>
    </>
  );
};

export default TopBar;
