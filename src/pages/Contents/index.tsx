import { Flex } from "@mantine/core";
import Profile from "./Profile";
import Projects from "./Projects";
import WelcomePage from "./Welcome";

const Contents = () => {
  return (
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
  );
};

export default Contents;
