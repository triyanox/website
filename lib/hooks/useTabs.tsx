import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

export type Tab = { label: string; id: string; link: string; icon?: ReactNode };

export function useTabs({
  tabs,
  initialTabId,
  onChange,
}: {
  tabs: Tab[];
  initialTabId: string;
  onChange?: (id: string) => void;
}) {
  let pathname = usePathname();
  if (pathname?.includes("/blog/")) {
    pathname = "/blog";
  }
  const [[selectedTabIndex, direction], setSelectedTab] = useState(() => {
    const indexOfInitialTab = tabs.findIndex((tab) => tab.link === pathname);
    return [indexOfInitialTab === -1 ? 0 : indexOfInitialTab, 0];
  });

  return {
    tabProps: {
      tabs,
      selectedTabIndex,
      onChange,
      setSelectedTab,
    },
    selectedTab: tabs[selectedTabIndex],
    contentProps: {
      direction,
      selectedTabIndex,
      tabs,
    },
  };
}
