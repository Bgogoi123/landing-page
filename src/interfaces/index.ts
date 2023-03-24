import { DefaultProps } from "@mantine/core";
import { TAlignItems, TFlexGap, TJustifyContents } from "../types";

export interface IProjectsContainerProps {
  justifyContents: TJustifyContents;
  alignItems?: TAlignItems;
  flexGap?: TFlexGap;
  styles?: {
    [key: string]: string | number;
  };
  backgroundColor?: string;
  contents: JSX.Element;
  lottieFile: unknown;
  lottieFileStyle: React.CSSProperties;
}
