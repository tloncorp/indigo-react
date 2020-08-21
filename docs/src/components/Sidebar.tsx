import * as React from "react";
import styled from "styled-components";
import {
  Box,
  Row,
  Col,
  Text,
  Label,
  Rule,
  BaseImage,
} from "local-indigo-react";
import manifest from "../../public/manifest.json";
import { Manifest, ComponentEntry } from "../types";
import { SidebarLink } from "./SidebarLink";
import { SidebarAnchor } from "./SidebarAnchor";
import { VersionTag } from "./VersionTag";
import { version } from "../../../package.json";
import { links } from "../constants";

export const Sidebar = () => (
  <Col width="256px">
    <Row
      minHeight="7"
      px="4"
      alignItems="center"
      borderRight="1px solid"
      borderRightColor="lightGray"
    >
      <Text fontSize="1" lineHeight="regular" bold mr="2">
        Indigo
      </Text>
      <div>
        <VersionTag>{version}</VersionTag>
      </div>
    </Row>

    <Box borderRight="1px solid" borderRightColor="lightGray">
      <Rule />
    </Box>

    <Col overflowY="scroll">
      <Box pt="3" borderRight="1px solid" borderRightColor="lightGray" />
      <Label
        borderRight="1px solid"
        borderRightColor="lightGray"
        bold
        px="4"
        minHeight="4"
      >
        Resources
      </Label>
      <SidebarAnchor px="4" target="_blank" href={links.reactGithub}>
        Github
      </SidebarAnchor>
      <SidebarAnchor px="4" target="_blank" href={links.reactNPM}>
        NPM
      </SidebarAnchor>
      <SidebarAnchor px="4" target="_blank" href={links.figma}>
        Figma
      </SidebarAnchor>

      <Box py="3" borderRight="1px solid" borderRightColor="lightGray">
        <Rule />
      </Box>

      <Label
        borderRight="1px solid"
        borderRightColor="lightGray"
        bold
        px="4"
        minHeight="4"
      >
        Themes
      </Label>
      <SidebarLink px="4" to={`/theme`}>
        Theme Viewer
      </SidebarLink>

      <Box py="3" borderRight="1px solid" borderRightColor="lightGray">
        <Rule />
      </Box>

      <Label
        borderRight="1px solid"
        borderRightColor="lightGray"
        px="4"
        bold
        minHeight="4"
      >
        Components
      </Label>
      {manifest.components.map((component: ComponentEntry) => (
        <SidebarLink px="4" to={`/component/${component.id}`}>
          {component.displayName}
        </SidebarLink>
      ))}
    </Col>
  </Col>
);
