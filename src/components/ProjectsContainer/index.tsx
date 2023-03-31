import { Box, Flex } from "@mantine/core";
import Lottie from "lottie-react";
import { IProjectsContainerProps } from "../../interfaces";
import { useMediaQuery } from "@mantine/hooks";
import {
  container,
  projectRoot,
  projectsContainer,
} from "../../pages/Contents/Projects/projectStyles";

const ProjectsContainer = ({
  justifyContents,
  alignItems,
  flexGap,
  contents,
  lottieFile,
  lottieFileStyle,
  disableHover,
}: IProjectsContainerProps) => {
  const matches = useMediaQuery("(min-width: 56.25em)");
  return (
    <Box sx={projectRoot}>
      {matches ? (
        <Flex
          direction={{ base: "column", sm: "row" }}
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

          {(justifyContents === "flex-start" ||
            justifyContents === "center") && (
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
      ) : (
        <Flex
          direction="column"
          sx={[container, { padding: "2em" }]}
          justify="center"
          align="center"
        >
          <Lottie
            animationData={lottieFile}
            loop={true}
            style={{
              width: "30%",
              height: "30%",
            }}
          />
          {contents}
        </Flex>
      )}
    </Box>
  );
};

export default ProjectsContainer;
