import styled from "styled-components";
import { space , display, compose, SpaceProps, DisplayProps } from 'styled-system'
import { DisclosurePanel as _DisclosurePanel } from "@reach/disclosure";

// DisclosurePanelProps not exported from @reach/disclosure, we duplicate type here.
type Props = React.HTMLAttributes<HTMLDivElement> & SpaceProps & DisplayProps & { children: React.ReactNode; }

const Sidebar = styled(_DisclosurePanel)<Props>`
  display: flex;
  flex-direction: column;
  height: 100%;
  outline: none;
  border-right: 1px solid ${p => p.theme.colors.lightGray};

  &[data-state='open'] {
    width: 250px;
  }

  &[data-state='collapsed'] {
    width: 0px;
    visibility: hidden;
  }

  ${compose(space, display)};
`;

export default Sidebar;
