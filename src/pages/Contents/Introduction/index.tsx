import { useContext, useEffect, useRef } from "react";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import hello from "../../../assets/lotties/hello.json";
import { handleMouseOverWelcome } from "../functions";
import { Text } from "@mantine/core";

export const Contents = () => {
  return (
    <Text
      sx={{
        fontSize: "40px",
      }}
    >
      Welcome to the Landing Page...
    </Text>
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
    <div ref={introRef} style={{ marginTop: "4em", paddingTop: "2.5em" }}>
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
