import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { ArrowUpDown } from "lucide-react";

export default function SortPopup() {
  return (
    <div className="inline-flex items-center gap-1 bg-default px-5 h-[52px] rounded-2xl cursor-pointer">
        <ArrowUpDown size={16}/>
        <b>Сортировка:</b>
        <b className="text-primary">популярное</b>
    </div>
    // <Popover showArrow offset={10} placement="bottom">
    //   <PopoverTrigger>
    //     <Button color="primary">Customize</Button>
    //   </PopoverTrigger>
    //   <PopoverContent className="w-[240px]">
    //     {(titleProps) => (
    //       <div className="px-1 py-2 w-full">
    //         <p className="text-small font-bold text-foreground" {...titleProps}>
    //           Dimensions
    //         </p>
    //         <div className="mt-2 flex flex-col gap-2 w-full">
    //           <Input
    //             defaultValue="100%"
    //             label="Width"
    //             size="sm"
    //             variant="bordered"
    //           />
    //         </div>
    //       </div>
    //     )}
    //   </PopoverContent>
    // </Popover>
  );
}
