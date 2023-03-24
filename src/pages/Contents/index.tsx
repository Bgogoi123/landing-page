import { Flex } from "@mantine/core";
import { useState } from "react";
import { MousePositionContext } from "../../context";
import Profile from "./Profile";
import Projects from "./Projects";
import WelcomePage from "./Welcome";

const Contents = () => {
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);

  return (
    <MousePositionContext.Provider value={{ mousePosition, setMousePosition }}>
      <Flex direction="column">
        <div
          style={{
            height: "100vh",
          }}
        >
          <WelcomePage />
        </div>
        <Projects />
        <Profile />
      </Flex>
    </MousePositionContext.Provider>
  );
};

export default Contents;
