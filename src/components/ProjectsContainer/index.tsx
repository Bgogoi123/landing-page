import { Flex } from "@mantine/core";
import Lottie from "lottie-react";
import { IProjectsContainerProps } from "../../interfaces";
import { projectsContainer } from "../../pages/Contents/Projects/projectStyles";

const ProjectsContainer = ({
  justifyContents,
  alignItems,
  flexGap,
  styles,
  backgroundColor,
  contents,
  lottieFile,
  lottieFileStyle,
}: IProjectsContainerProps) => {
  return (
    <Flex
      direction="row"
      justify={justifyContents}
      align={alignItems ?? "center"}
      gap={flexGap ?? "0"}
      sx={[
        projectsContainer,
        {
          backgroundColor: backgroundColor ?? "#9d7ff5",
        },
        // styles,
      ]}
    >
      {justifyContents === "flex-end" && (
        <>
          {contents}
          <Lottie
            animationData={lottieFile}
            loop={true}
            style={lottieFileStyle}
          />
        </>
      )}

      {justifyContents === "flex-start" && (
        <>
          <Lottie
            animationData={lottieFile}
            loop={true}
            style={lottieFileStyle}
          />
          {contents}
        </>
      )}
    </Flex>
  );
};

export default ProjectsContainer;
