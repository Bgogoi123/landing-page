import { Button, Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import clock from "../../../assets/lotties/clock.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import "../../animations.css";
import { handleMouseOverPomodoro } from "../functions";
import { IconStyle } from "./projectStyles";

const Contents = () => {
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
  const { setMouseOverSection } = useContext(MouseOverSectionContext);
  const promodoroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleMouseOverPomodoro({
      setMouseOverSection,
      elementRef: promodoroRef,
    });
  }, []);

  return (
    <div ref={promodoroRef}>
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
