import { createContext } from "react";

type TTabsContext = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

type TMousePositonContext = {
  mousePosition: [number, number];
  setMousePosition: React.Dispatch<React.SetStateAction<[number, number]>>;
};

type TMouseOverSectionContext = {
  mouseOverSection: {
    welcome: boolean;
    pomodoro: boolean;
    codeEditor: boolean;
    sketchbook: boolean;
    profile: boolean;
  };
  setMouseOverSection: React.Dispatch<
    React.SetStateAction<{
      welcome: boolean;
      pomodoro: boolean;
      codeEditor: boolean;
      sketchbook: boolean;
      profile: boolean;
    }>
  >;
};

export const TabsContext = createContext<TTabsContext>({
  tab: "home",
  setTab: () => {},
});

export const MousePositionContext = createContext<TMousePositonContext>({
  mousePosition: [0, 0],
  setMousePosition: () => {},
});

export const MouseOverSectionContext = createContext<TMouseOverSectionContext>({
  mouseOverSection: {
    welcome: false,
    pomodoro: false,
    codeEditor: false,
    sketchbook: false,
    profile: false,
  },
  setMouseOverSection: () => {},
});
