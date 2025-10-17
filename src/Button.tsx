import React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition active:scale-95 disabled:opacity-50";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
