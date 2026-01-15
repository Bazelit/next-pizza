"use client";

import { Button } from "@heroui/button";
import { SlidersHorizontal } from "lucide-react";
import { Drawer } from "vaul";
import Filters from "../shared/filters";
import { useState, useEffect } from "react";

const FiltersButton = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button className="min-md:hidden" isIconOnly={isMobile}>
          <SlidersHorizontal size={16} />
          <b className="max-[401px]:hidden">Фильтры</b>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed outline-none w-[310px] flex z-50"
          style={
            {
              "--initial-transform": "calc(100% + 8px)",
            } as React.CSSProperties
          }
        >
          <div className="bg-white dark:bg-[#191918] h-full w-full grow p-5 flex flex-col rounded-[16px] overflow-y-auto">
            <div className="max-w-md mx-auto">
              <Drawer.Description>
                <Filters />
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default FiltersButton;
