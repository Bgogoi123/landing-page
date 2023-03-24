import { Button, Flex, Text } from "@mantine/core";
import codeEditor from "../../../assets/lotties/codeEditor.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { codeEditorIcon } from "./projectStyles";

const Contents = () => {
  return (
    <Flex direction="column">
      <Text className="projectText" sx={{ textAlign: "right" }}>
        Code Editor
      </Text>

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

const CodeEditor = () => {
  return (
    <ProjectsContainer
      lottieFile={codeEditor}
      lottieFileStyle={codeEditorIcon}
      contents={<Contents />}
      justifyContents="flex-end"
    />
  );
};

export default CodeEditor;
