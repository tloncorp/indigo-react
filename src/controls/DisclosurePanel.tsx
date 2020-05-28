import styled from "styled-components";
import { DisclosurePanel as _DisclosurePanel } from "@reach/disclosure";

// DisclosurePanelProps not exported from @reach/disclosure, we duplicate type here.
type Props = React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode; }

const DisclosurePanel = styled(_DisclosurePanel)<Props>`
  outline: none;
`;

export default DisclosurePanel;
