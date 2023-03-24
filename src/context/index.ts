import { createContext } from "react";

type TTabsContext = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

type TMousePositonContext = {
  mousePosition: [number, number];
  setMousePosition: React.Dispatch<React.SetStateAction<[number, number]>>;
};

export const TabsContext = createContext<TTabsContext>({
  tab: "home",
  setTab: () => {},
});

export const MousePositionContext = createContext<TMousePositonContext>({
  mousePosition: [0, 0],
  setMousePosition: () => {},
});
