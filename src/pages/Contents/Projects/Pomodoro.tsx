import { useEffect, useContext } from "react";
import { Button, Flex, Text } from "@mantine/core";
import clock from "../../../assets/lotties/clock.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import "../../animations.css";
import { IconStyle } from "./projectStyles";
import { MousePositionContext } from "../../../context";

const Contents = () => {
  const { mousePosition, setMousePosition } = useContext(MousePositionContext);

  useEffect(() => {}, [mousePosition]);

  return (
    <Flex direction="column" gap="10px">
      <Text className="projectText">Pomodoro ( With Task Management )</Text>

      <Flex gap="10px">
        <Button variant="light" color="violet" className="githubLinkButton">
          Github Link
        </Button>
        <Button variant="light" color="violet" className="demoLinkButton">
          Demo
        </Button>
      </Flex>
    </Flex>
  );
};

const Pomodoro = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* animation not working */}
      {/* <img src={curve} className="squeares" /> */}

      <ProjectsContainer
        contents={<Contents />}
        justifyContents="flex-start"
        lottieFile={clock}
        lottieFileStyle={IconStyle}
      />
    </div>
  );
};

export default Pomodoro;
