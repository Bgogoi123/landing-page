import { CSSObject, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext, useEffect, useRef } from "react";
import hello from "../../../assets/lotties/hello.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverWelcome } from "../functions";

const introText: CSSObject = {
  fontSize: "25px",
  textAlign: "center",
};

export const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Text
      sx={[
        introText,
        !matches
          ? {
              marginTop: "-2em",
            }
          : {},
      ]}
    >
      Listing some of my projects in React JS
    </Text>
  );
};

const Introduction = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width: 56.25em)");
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  const introRoot: React.CSSProperties = {
    marginTop: matches ? "2em" : "-2em",
    paddingTop: "5em",
    backgroundColor: "#9d7ff5",
    zIndex: -1,
  };

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
