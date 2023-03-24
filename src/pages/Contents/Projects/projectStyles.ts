import { CSSObject } from "@mantine/core";

export const projectsContainer: CSSObject = {
  border: "5px solid #fff",
  borderTopRightRadius: "20px",
  borderBottomLeftRadius: "20px",
  transitionDuration: "800ms",
  padding: "10px",
  color: "#fff",

  "&:hover": {
    transform: "scale(1.03)",
    transitionDuration: "800ms",
  },
};

// pomodoro
export const IconStyle: React.CSSProperties = {
  width: "20%",
  height: "20%",
};

export const codeEditorIcon: React.CSSProperties = {
  width: "30%",
  height: "30%",
};
