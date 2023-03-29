import { Box, Flex } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import { MouseOverSectionContext } from "../../context";

const Footer = () => {
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseover = () => {
      setMouseOverSection({
        topNavigation: false,
        welcome: true,
        pomodoro: false,
        codeEditor: false,
        sketchbook: false,
        profile: false,
      });
    };

    if (!containerRef.current) return;
    containerRef.current.addEventListener("mouseover", handleMouseover);

    return () => {
      window.removeEventListener("mouseover", handleMouseover);
    };
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      sx={{
        backgroundColor: "#8367cf",
        padding: "10px",
        height: "50px",
        color: "#d6d6d6",
        textAlign: "center",
      }}
      ref={containerRef}
    >
      Designed and Developed by Bharati Gogoi
    </Flex>
  );
};

export default Footer;
