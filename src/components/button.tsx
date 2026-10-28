import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "ink" | "coral" | "paper";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-ink font-semibold transition-transform duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-paper shadow-hard hover:shadow-hard-lg",
  coral: "bg-coral text-ink shadow-hard hover:shadow-hard-lg",
  paper: "bg-paper text-ink shadow-hard hover:shadow-hard-lg",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export function buttonClass(variant: Variant = "ink", size: Size = "md") {
  return cn(base, variants[variant], sizes[size]);
}

export function Button({
  variant = "ink",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
  return <button className={cn(buttonClass(variant, size), className)} {...props} />;
}

export function ButtonLink({
  variant = "ink",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link className={cn(buttonClass(variant, size), className)} {...props} />;
}
