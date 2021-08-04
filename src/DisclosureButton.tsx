import * as React from "react";
import { Icon } from "./Icon";

export type DisclosureButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  isOpen?: boolean;
};

export const DisclosureButton = ({
  isOpen,
  children,
  ...props
}: DisclosureButtonProps) => (
  <button
    className="flex items-center w-full h-8 px-2 border border-solid border-transparent rounded overflow-hidden"
    {...props}
  >
    <Icon icon={isOpen ? "TriangleSouth" : "TriangleEast"} className="mr-2" />
    {children}
  </button>
);

DisclosureButton.displayName = "DisclosureButton";
