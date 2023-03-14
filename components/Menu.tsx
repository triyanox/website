"use client";

import { useTabs } from "lib/hooks/useTabs";
import { useState } from "react";
import Icons from "components/icons";
import { Spring } from "./Spring";

const MenuToggle = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Home",
        link: "/",
        id: "Home",
        icon: <Icons.Home />,
      },
      {
        label: "Blog",
        link: "/blog",
        id: "Blog",
        icon: <Icons.Blog />,
      },
    ],
    initialTabId: "Triangle",
  });
  const spring = useTabs(hookProps);
  return (
    <div className="py-3 px-2 shadow-shadow-secondary dark:shadow-shadow-secondary-dark rounded-2xl flex flex-row justify-center items-center gap-2 bg-bg-secondary-light dark:bg-bg-secondary-dark">
      <div className="max-w-6xl">
        <Spring.Tabs {...spring.tabProps} />
      </div>
    </div>
  );
};

export default MenuToggle;
