import { Button } from "@heroui/button";
import { ArrowUpDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";

export default function SortPopup() {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button className="inline-flex items-center gap-1 bg-default px-5 h-[52px] rounded-2xl cursor-pointer">
          <ArrowUpDown size={16} />
          <b>Сортировка:</b>
          <b className="text-primary">популярное</b>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
