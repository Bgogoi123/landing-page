import ProjectsContainer from "../../../components/ProjectsContainer";
import digitalPaint from "../../../assets/lotties/digital-paint.json";
import { Button, Flex, Text } from "@mantine/core";
import { IconStyle } from "./projectStyles";
import { useContext, useEffect, useRef } from "react";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverSketchbook } from "../functions";

const Contents = () => {
  return (
    <Flex direction="column" gap="10px">
      <Text className="projectText">Digital Sketchbook</Text>

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

const Sketchbook = () => {
  const sketchbookRef = useRef<HTMLDivElement>(null);
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  useEffect(() => {
    handleMouseOverSketchbook({
      elementRef: sketchbookRef,
      setMouseOverSection,
    });
  }, []);

  return (
    <div ref={sketchbookRef}>
      <ProjectsContainer
        justifyContents="flex-start"
        lottieFile={digitalPaint}
        lottieFileStyle={IconStyle}
        contents={<Contents />}
      />
    </div>
  );
};

export default Sketchbook;
