import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { ArrowUpDown } from "lucide-react";

export default function SortPopup() {
  return (
    <div>
      <div className="inline-flex items-center gap-1 bg-default px-5 h-[52px] rounded-2xl cursor-pointer">
        <ArrowUpDown size={16} />
        <b>Сортировка:</b>
        <b className="text-primary">популярное</b>
      </div>
     
    </div>
  );
}
