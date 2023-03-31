import { Flex } from "@mantine/core";
import { useState } from "react";
import "./App.css";
import { MouseOverSectionContext } from "./context";
import Contents from "./pages/Contents";

function App() {
  const [mouseOverSection, setMouseOverSection] = useState<{
    welcome: boolean;
    pomodoro: boolean;
    codeEditor: boolean;
    sketchbook: boolean;
    profile: boolean;
  }>({
    welcome: false,
    pomodoro: false,
    codeEditor: false,
    sketchbook: false,
    profile: false,
  });

  return (
    <MouseOverSectionContext.Provider
      value={{ mouseOverSection, setMouseOverSection }}
    >
      <Flex direction="column">
        <Contents />
      </Flex>
    </MouseOverSectionContext.Provider>
  );
}

export default App;
