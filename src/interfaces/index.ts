import { TAlignItems, TFlexGap, TJustifyContents } from "../types";

export interface IProjectsContainerProps {
  justifyContents: TJustifyContents;
  alignItems?: TAlignItems;
  flexGap?: TFlexGap;
  contents: JSX.Element;
  lottieFile?: unknown;
  lottieFileStyle?: React.CSSProperties;
  disableHover?: boolean;
}

export interface IHandleCursorAnimation {
  element: HTMLDivElement | null;
  mouseOverSection: {
    welcome: boolean;
    pomodoro: boolean;
    codeEditor: boolean;
    sketchbook: boolean;
    profile: boolean;
  };
  setCursorStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  circle: string;
  code: string;
  brush: string;
}

export interface IHandleMouseOver {
  setMouseOverSection: (
    value: React.SetStateAction<{
      welcome: boolean;
      pomodoro: boolean;
      codeEditor: boolean;
      sketchbook: boolean;
      profile: boolean;
    }>
  ) => void;
  elementRef: React.RefObject<HTMLDivElement>;
}
