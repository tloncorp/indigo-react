import styled from "styled-components";
import { DisclosurePanel as _DisclosurePanel } from "@reach/disclosure";

// DisclosurePanelProps not exported from @reach/disclosure, we duplicate type here.
type Props = React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode; }

const DisclosurePanel = styled(_DisclosurePanel)<Props>`
  outline: none;
  border-left: 1px solid ${p => p.theme.colors.lightGray};
  padding: ${p => `${p.theme.space[2]}px`};
  margin-left: ${p => `${p.theme.space[2]}px`};
`;

export default DisclosurePanel;
