import { Button, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext, useEffect, useRef } from "react";
import codeEditor from "../../../assets/lotties/codeEditor.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverCodeEditor } from "../functions";
import { projectText } from "../styles";
import { codeEditorIcon } from "./projectStyles";

const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Flex direction="column" align={matches ? "flex-end" : "center"}>
      <Text
        sx={[
          projectText,
          { textAlign: "right" },
          matches ? { fontSize: "200%" } : { fontSize: "20px" },
        ]}
      >
        Code Editor
      </Text>

      <Flex gap="10px" direction={{ base: "column", sm: "row" }}>
        <Button variant="light" color="violet" className="githubLinkButton">
          <a href="https://github.com/Bgogoi123/Code-Editor.git">Github Link</a>
        </Button>
        <Button variant="light" color="violet" className="demoLinkButton">
          <a href="https://main--cheerful-khapse-0aa914.netlify.app/">Demo</a>
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
