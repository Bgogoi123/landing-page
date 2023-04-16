import { Button, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext, useEffect, useRef } from "react";
import clock from "../../../assets/lotties/clock.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import "../../animations.css";
import { handleMouseOverPomodoro } from "../functions";
import { projectText } from "../styles";
import { IconStyle } from "./projectStyles";
import { openNewTab } from "./openNewTab";

const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Flex direction="column" gap="10px" justify="center" align="center">
      <Text
        sx={[
          projectText,
          matches ? { textAlign: "left" } : { textAlign: "center" },
          matches
            ? { fontSize: "200%" }
            : { fontSize: "20px", lineHeight: "30px" },
        ]}
      >
        Pomodoro <br />( With Task Management )
      </Text>

      <Flex gap="10px" direction={{ base: "column", sm: "row" }}>
        <Button
          variant="light"
          color="violet"
          className="githubLinkButton"
          onClick={() => openNewTab("https://github.com/Bgogoi123/pomodoro")}
        >
          Github Link
        </Button>
        <Button
          variant="light"
          color="violet"
          className="demoLinkButton"
          onClick={() =>
            openNewTab("https://main--celebrated-licorice-c76d3d.netlify.app/")
          }
        >
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
