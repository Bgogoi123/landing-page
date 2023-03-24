import { Box } from "@mantine/core";
import CodeEditor from "./CodeEditor";
import Pomodoro from "./Pomodoro";
import Sketchbook from "./Sketchbook";

const Projects = () => {
  return (
    <Box>
      <Pomodoro />
      <CodeEditor />
      <Sketchbook />
    </Box>
  );
};

export default Projects;
