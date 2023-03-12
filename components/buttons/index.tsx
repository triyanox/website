import Link from "next/link";
import { ReactNode } from "react";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href}>
      <button className="flex justify-center items-center gap-2 gap rounded-2xl dark:bg-bg-secondary-dark bg-bg-secondary-light px-4 py-3 font-bold shadow-shadow-secondary active:scale-95 hover:scale-105 transition-all duration-200">
        {children}
      </button>
    </Link>
  );
};

export { LinkButton };
