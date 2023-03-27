import { Box, Flex } from "@mantine/core";
import Lottie from "lottie-react";
import { useContext, useEffect, useRef } from "react";
import alarmClock from "../../../assets/lotties/alarm-clock.json";
import artist from "../../../assets/lotties/artist.json";
import coding from "../../../assets/lotties/coding.json";
import network from "../../../assets/lotties/network.json";
import notes from "../../../assets/lotties/notes.json";
import reactLogo from "../../../assets/lotties/react-logo.json";

import {
  MouseOverSectionContext,
  MousePositionContext,
} from "../../../context";
import "../../animations.css";
import {
  alarmClockStyles,
  codingStyles,
  networkStyles,
  notesStyles,
  paintStyles,
  reactLogoStyles,
  welcomTextContainer,
} from "../styles";

const WelcomePage = () => {
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseover = () => {
      setMouseOverSection({
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
    <Box ref={containerRef} sx={{ height: "120vh" }}>
      <Flex justify="center" align="center">
        <div style={welcomTextContainer}>
          <b className="typing">Welcome</b>
        </div>
      </Flex>

      {/* react logo */}
      <Lottie animationData={reactLogo} loop={true} style={reactLogoStyles} />

      {/* coding */}
      <Lottie animationData={coding} loop={true} style={codingStyles} />

      {/* notes */}
      <Lottie animationData={notes} loop={true} style={notesStyles} />

      {/* alarm clock */}
      <Lottie animationData={alarmClock} loop={true} style={alarmClockStyles} />

      {/* paint */}
      <Lottie animationData={artist} loop={true} style={paintStyles} />

      {/* network */}
      <Lottie animationData={network} loop={true} style={networkStyles} />
    </Box>
  );
};

export default WelcomePage;
