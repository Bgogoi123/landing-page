import { Box } from "@mantine/core";
import AnimatedLine from "../AnimatedLine";
import CodeEditor from "./CodeEditor";
import Pomodoro from "./Pomodoro";
import Sketchbook from "./Sketchbook";

const Projects = () => {
  return (
    <Box>
      <Pomodoro />
      <AnimatedLine />
      <CodeEditor />
      <AnimatedLine />
      <Sketchbook />
      <AnimatedLine />
    </Box>
  );
};

export default Projects;
