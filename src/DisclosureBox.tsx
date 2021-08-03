import * as React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import classnames from "classnames";

export type DisclosureBoxProps = {
  isOpen?: boolean;
};

type PolymorphicDisclosureBox = Polymorphic.ForwardRefComponent<
  "div",
  DisclosureBoxProps
>;

export const DisclosureBox: PolymorphicDisclosureBox = React.forwardRef(
  (
    { as: Comp = "div", isOpen, className, children, ...props },
    forwardedRef
  ) => (
    <Comp
      className={classnames(
        "flex-col p-2 mx-4 border-l border-solid border-gray-200",
        isOpen ? "flex" : "hidden",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Comp>
  )
);

DisclosureBox.displayName = "DisclosureBox";
