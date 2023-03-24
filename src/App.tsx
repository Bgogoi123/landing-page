import { Box, Flex } from "@mantine/core";
import { useState } from "react";
import "./App.css";
import { TabsContext } from "./context";
import Contents from "./pages/Contents";
import TopNavigation from "./pages/TopNavigation";

function App() {
  const [tab, setTab] = useState<string>("home");

  return (
    <TabsContext.Provider
      value={{
        tab,
        setTab,
      }}
    >
      <Flex direction="column">
        <TopNavigation />
        <Contents />
      </Flex>
    </TabsContext.Provider>
  );
}

export default App;
