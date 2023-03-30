import { useContext, useEffect, useRef } from "react";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import hello from "../../../assets/lotties/hello.json";
import { handleMouseOverWelcome } from "../functions";
import { Flex, Text } from "@mantine/core";
import {
  introContainer,
  introHeadingText,
  introRoot,
  introText,
} from "./introStyles";

export const Contents = () => {
  return (
    <Flex direction="column" sx={introContainer}>
      {/* <Text sx={introHeadingText}>Welcome to my profile.</Text> */}
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
    <div ref={introRef} style={introRoot}>
      <ProjectsContainer
        contents={<Contents />}
        lottieFile={hello}
        lottieFileStyle={{
          // paddingTop: "3em",
          // marginBottom: "-50px",
          // border: "1px solid black",
          width: "300px",
          height: "300px",
        }}
        justifyContents="center"
        disableHover={true}
      />
    </div>
  );
};

export default Introduction;
