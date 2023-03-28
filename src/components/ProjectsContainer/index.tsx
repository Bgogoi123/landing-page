import { Flex } from "@mantine/core";
import Lottie from "lottie-react";
import { IProjectsContainerProps } from "../../interfaces";
import {
  container,
  projectsContainer,
} from "../../pages/Contents/Projects/projectStyles";

const ProjectsContainer = ({
  justifyContents,
  alignItems,
  flexGap,
  styles,
  backgroundColor,
  contents,
  lottieFile,
  lottieFileStyle,
  disableHover,
}: IProjectsContainerProps) => {
  return (
    <Flex
      direction="row"
      justify={justifyContents}
      align={alignItems ?? "center"}
      gap={flexGap ?? "0"}
      sx={disableHover ? container : projectsContainer}
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

      {(justifyContents === "flex-start" || justifyContents === "center") && (
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
