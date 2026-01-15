"use client";

import { FC } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface IGroupVariantsProps {
  items: readonly Variant[];
  // onCLick: (value: Variant["value"]) => void;
  // selectedValue?: Variant["value"];
}

const GroupVariants: FC<IGroupVariantsProps> = ({
  items,
  // onCLick,
  // selectedValue,
}) => {
  const disabledKeys = items
    .filter((item) => item.disabled)
    .map((item) => item.name);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Size Options"
        disabledKeys={disabledKeys}
        radius="full"
        color="primary"
      >
        {items.map((item) => (
          <Tab key={item.name} title={item.name}>
            <Card>
              <CardBody>{item.name}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default GroupVariants;
