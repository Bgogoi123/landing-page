import { useContext, useEffect, useRef } from "react";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import hello from "../../../assets/lotties/hello.json";
import { handleMouseOverWelcome } from "../functions";
import { Flex, Text } from "@mantine/core";
import { introContainer, introHeadingText, introText } from "./introStyles";

export const Contents = () => {
  return (
    <Flex direction="column">
      <Text sx={introHeadingText}>Welcome to my profile.</Text>
      <Text sx={introText}>Listing some of my projects in React JS</Text>
    </Flex>
  );
};

const Introduction = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  useEffect(() => {
    handleMouseOverWelcome({
      elementRef: introRef,
      setMouseOverSection,
    });
  }, []);
  return (
    <div ref={introRef} style={introContainer}>
      <ProjectsContainer
        contents={<Contents />}
        lottieFile={hello}
        lottieFileStyle={{
          width: "25%",
          height: "25%",
        }}
        justifyContents="center"
        disableHover={true}
      />
    </div>
  );
};

export default Introduction;
