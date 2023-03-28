import { Button, Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import clock from "../../../assets/lotties/clock.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import "../../animations.css";
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
    const handleMouseover = () => {
      setMouseOverSection({
        welcome: false,
        pomodoro: true,
        codeEditor: false,
        sketchbook: false,
        profile: false,
      });
    };

    if (!promodoroRef.current) return;
    promodoroRef.current.addEventListener("mouseover", handleMouseover);
    promodoroRef.current.addEventListener("mouseout", () => {
      setMouseOverSection({
        welcome: true,
        pomodoro: false,
        codeEditor: false,
        sketchbook: false,
        profile: false,
      });
    });

    return () => {
      window.removeEventListener("mouseover", handleMouseover);
    };
  }, []);

  return (
    <div ref={promodoroRef} style={{ marginTop: "2em" }}>
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
