import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import classnames from "classnames";

export interface ActionProps {
  destructive?: boolean;
}

type PolymorphicAction = Polymorphic.ForwardRefComponent<"button", ActionProps>;

type ActionStates = "default" | "destructive";

const variants: Record<ActionStates, string> = {
  default: "text-blue-400 disabled:text-gray-200",
  destructive: "text-red-300 disabled:text-red-200",
};

export const Action: PolymorphicAction = React.forwardRef(
  (
    { as: Comp = "button", destructive = false, className, children, ...props },
    forwardedRef
  ) => (
    <Comp
      className={classnames(
        "action",
        variants[destructive ? "destructive" : "default"],
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Comp>
  )
);

Action.displayName = "Action";
