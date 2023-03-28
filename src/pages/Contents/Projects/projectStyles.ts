import { CSSObject } from "@mantine/core";

export const projectsContainer: CSSObject = {
  // position: "relative",
  borderTop: "1px solid #fff",
  borderBottom: "1px solid #fff",
  transitionDuration: "800ms",
  padding: "10px",
  backgroundColor: "#9d7ff5",
  color: "#fff",

  "&:hover": {
    transform: "scale(1.03)",
    transitionDuration: "800ms",
    zIndex: 99,
  },
};

// pomodoro
export const IconStyle: React.CSSProperties = {
  width: "20%",
  height: "20%",
  zIndex: 999,
};

export const codeEditorIcon: React.CSSProperties = {
  width: "30%",
  height: "30%",
};
