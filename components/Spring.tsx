import classNames from "classnames";
import { Tab } from "lib/hooks/useTabs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { animated, easings, useSpring } from "react-spring";
import { usePathname } from "next/navigation";

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

export const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );
  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);
  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const onSelectTab = (i: number) => {
    router.push(tabs[i].link);
    setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
  };

  const underlineStyles = useSpring({
    to:
      selectedRect && navRect
        ? {
            width: selectedRect.width * 0.8,
            transform: `translateX(calc(${
              selectedRect.left - navRect.left
            }px + 15%))`,
            opacity: 1,
          }
        : { opacity: 0 },
    config: {
      duration: 300,
      easing: easings.easeOutCubic,
    },
  });

  return (
    <nav
      ref={navRef}
      className="flex flex-shrink-0 justify-center items-center relative z-0"
    >
      {tabs.map((item, i) => {
        return (
          <button
            key={i}
            className={classNames(
              "gap-2 text-md relative active:scale-95 transition-all duration-200 rounded-2xl flex items-center h-10 px-4 z-20 bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark cursor-pointer select-none",
              {
                "text-text-primary-light dark:text-text-primary-dark":
                  pathname?.includes(item.link),
              },
              {
                "font-bold": pathname?.includes(item.link),
              }
            )}
            ref={(el) => (buttonRefs[i] = el)}
            onClick={() => onSelectTab(i)}
          >
            {item.icon}
            {item.label}
          </button>
        );
      })}
      <animated.div
        className="h-full absolute z-10 rounded-2xl top-0 left-0 bg-bg-primary-light dark:bg-bg-primary-dark"
        style={underlineStyles}
      />
    </nav>
  );
};

export const Spring = { Tabs };
