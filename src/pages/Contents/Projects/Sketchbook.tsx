import ProjectsContainer from "../../../components/ProjectsContainer";
import digitalPaint from "../../../assets/lotties/digital-paint.json";
import { Button, Flex, Text } from "@mantine/core";
import { IconStyle } from "./projectStyles";
import { useContext, useEffect, useRef } from "react";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverSketchbook } from "../functions";
import { useMediaQuery } from "@mantine/hooks";
import { projectText } from "../styles";

const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Flex
      direction="column"
      gap="10px"
      align={matches ? "flex-start" : "center"}
    >
      <Text
        sx={[
          projectText,
          matches ? { fontSize: "200%" } : { fontSize: "20px" },
        ]}
      >
        Digital Sketchbook
      </Text>

      <Flex gap="10px" direction={{ base: "column", sm: "row" }}>
        <Button variant="light" color="violet" className="githubLinkButton">
          <a href="https://github.com/Bgogoi123/visualization-with-d3">
            Github Link
          </a>
        </Button>
        <Button variant="light" color="violet" className="demoLinkButton">
          <a href="https://capable-dragon-45716a.netlify.app/">Demo</a>
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
