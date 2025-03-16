import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  subClass,
}: {
  className?: string;
  subClass?: string;
}) => {
  return (
    <Link href={"/"}>
      <span
        className={cn(
          "text-2xl text-darkColor font-black uppercase tracking-wider hover:text-darkRed font-sans group hoverEffect",
          className
        )}
      >
        Techno
        <span
          className={cn(
            "text-darkRed group-hover:text-darkColor hoverEffect",
            subClass
          )}
        >
          x
        </span>
      </span>
    </Link>
  );
};

export default Logo;
