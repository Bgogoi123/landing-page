import ProjectsContainer from "../../../components/ProjectsContainer";
import digitalPaint from "../../../assets/lotties/digital-paint.json";
import { Button, Flex, Text } from "@mantine/core";
import { IconStyle } from "./projectStyles";

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
  return (
    <ProjectsContainer
      justifyContents="flex-start"
      lottieFile={digitalPaint}
      lottieFileStyle={IconStyle}
      contents={<Contents />}
    />
  );
};

export default Sketchbook;
