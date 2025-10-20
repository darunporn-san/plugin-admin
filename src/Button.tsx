"use client";

import * as React from "react";
import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button"; // relative path
import { cn } from "@/lib/utils"; // utility ของคุณ

export type CustomButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  highlight?: boolean;
};

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, highlight, ...props }, ref) => {
    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          buttonVariants({ variant: props.variant }),
          highlight && "ring-2 ring-yellow-400",
          className
        )}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";
