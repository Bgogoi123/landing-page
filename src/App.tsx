import { Flex } from "@mantine/core";
import { useState } from "react";
import "./App.css";
import { MouseOverSectionContext, TabsContext } from "./context";
import Contents from "./pages/Contents";
import TopNavigation from "./pages/TopNavigation";

function App() {
  const [tab, setTab] = useState<string>("home");
  const [mouseOverSection, setMouseOverSection] = useState<{
    topNavigation: boolean;
    welcome: boolean;
    pomodoro: boolean;
    codeEditor: boolean;
    sketchbook: boolean;
    profile: boolean;
  }>({
    topNavigation: false,
    welcome: false,
    pomodoro: false,
    codeEditor: false,
    sketchbook: false,
    profile: false,
  });

  return (
    <TabsContext.Provider
      value={{
        tab,
        setTab,
      }}
    >
      <MouseOverSectionContext.Provider
        value={{ mouseOverSection, setMouseOverSection }}
      >
        <Flex
          direction="column"
          sx={{
            overflowX: "hidden",
          }}
        >
          <TopNavigation />
          <Contents />
        </Flex>
      </MouseOverSectionContext.Provider>
    </TabsContext.Provider>
  );
}

export default App;
