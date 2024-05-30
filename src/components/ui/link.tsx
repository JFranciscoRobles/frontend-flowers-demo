import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPorpps = AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkUI: React.FC<LinkPorpps> = (props) => {
  return (
    <Link
      {...props}
      //@ts-ignore
      name="link"
      //@ts-ignore
      className={cn(
        "inline-flex justify-center items-center p-2 text-sm leading-none text-center rounded-lg ring-opacity-30 hover:bg-muted hover:shadow-outline focus:outline-none focus:ring-2 ring-primary/40 focus:bg-primary/20"
      )}
    >
      {props.children}
    </Link>
  );
};

export default LinkUI;
