import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as indigo from "local-indigo-react";
import {
  Col,
  Text,
  TwoUp,
  Center,
  commonStyle,
  CommonStyleProps,
} from "local-indigo-react";
import {
  LiveProvider,
  LiveEditor as ReactLiveLiveEditor,
  LiveError as ReactLiveLiveError,
  LivePreview as ReactLiveLivePreview,
} from "react-live";
import { ComponentProperties } from "../types";

export const LiveEditor = styled(ReactLiveLiveEditor)<
  React.PropsWithChildren<CommonStyleProps>
>({}, ...commonStyle);

export const LiveError = styled(ReactLiveLiveError)<
  React.PropsWithChildren<CommonStyleProps>
>({}, ...commonStyle);

export const LivePreview = styled(ReactLiveLivePreview)<
  React.PropsWithChildren<CommonStyleProps>
>({}, ...commonStyle);

const scope = { ...indigo, useState, useEffect };

const theme = {
  plain: {
    color: "rgba(0,0,0,0.6)",
    backgroundColor: "rgba(0,0,0,0.04)",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgba(0,0,0,0.6)",
      },
    },
    {
      types: ["builtin", "changed", "keyword"],
      style: {
        color: "#FF4136",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)",
      },
    },
    {
      types: ["deleted", "string", "attr-value"],
      style: {
        color: "rgb(206, 145, 120)",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)",
      },
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgba(0,0,0,1)",
      },
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "rgba(0,0,0,0.8)",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#9D52FF",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#009F65",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
  ],
};

export type ComponentPreviewProps = {
  properties: ComponentProperties;
};

export const resetReactLive = {
  fontFamily: "",
  padding: "",
};

export const ComponentPreview = ({ properties }: ComponentPreviewProps) => (
  <LiveProvider theme={undefined} scope={scope} code={properties.snippet}>
    <TwoUp>
      <Col>
        <LiveEditor
          p="0"
          fontFamily="mono"
          fontSize="0"
          style={resetReactLive}
        />
        <LiveError fontFamily="mono" fontSize="0" color="red" />
      </Col>
      <Center>
        <LivePreview />
      </Center>
    </TwoUp>
  </LiveProvider>
);
