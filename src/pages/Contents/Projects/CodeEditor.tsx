import { Button, Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import codeEditor from "../../../assets/lotties/codeEditor.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverCodeEditor } from "../functions";
import { codeEditorIcon } from "./projectStyles";

const Contents = () => {
  return (
    <Flex direction="column">
      <Text className="projectText" sx={{ textAlign: "right" }}>
        Code Editor
      </Text>

      <Flex gap="10px" direction={{ base: "column", sm: "row" }}>
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
  const codeEditorRef = useRef<HTMLDivElement>(null);
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  useEffect(() => {
    handleMouseOverCodeEditor({
      setMouseOverSection,
      elementRef: codeEditorRef,
    });
  }, []);

  return (
    <div ref={codeEditorRef}>
      <ProjectsContainer
        lottieFile={codeEditor}
        lottieFileStyle={codeEditorIcon}
        contents={<Contents />}
        justifyContents="flex-end"
      />
    </div>
  );
};

export default CodeEditor;
