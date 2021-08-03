import React, { HTMLAttributes } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import classnames from "classnames";

type ButtonVariant =
  | "default"
  | "primary"
  | "destructive"
  | "destructive-primary";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type PolymorphicButton = Polymorphic.ForwardRefComponent<"button", ButtonProps>;

const variants: Record<ButtonVariant, string> = {
  default:
    "text-black bg-white border-gray-200 disabled:text-gray-200 disabled:bg-gray-100",
  primary:
    "text-white border-blue-400 bg-blue-400 disabled:text-blue-200 disabled:border-blue-200 disabled:bg-blue-100",
  destructive:
    "text-red-300 border-red-300 bg-white disabled:text-red-200 disabled:border-red-200 disabled:bg-red-100",
  "destructive-primary":
    "text-white border-red-300 bg-red-300 disabled:text-red-200 disabled:border-red-200 disabled:bg-red-100",
};

export const Button: PolymorphicButton = React.forwardRef(
  (
    { as: Comp = "button", variant = "default", className, children, ...props },
    forwardedRef
  ) => (
    <Comp
      className={classnames("button", variants[variant], className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Comp>
  )
);

Button.displayName = "Button";
