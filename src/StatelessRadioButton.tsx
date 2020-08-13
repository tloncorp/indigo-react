import * as React from "react";
import { Indicator } from "./Indicator";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Col } from "./Col";

export type StatelessRadioButtonProps = {
  selected: boolean;
  hasError: boolean;
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const StatelessRadioButton = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessRadioButtonProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <Indicator
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="3"
        borderRadius="999px"
      >
        <Icon icon={selected ? "Bullet" : "Blank"} />
      </Indicator>
      <Col>{children}</Col>
    </Box>
  );
};

StatelessRadioButton.displayName = "StatelessRadioButton";
