import { Box, Flex } from "@mantine/core";
import Lottie from "lottie-react";
import { useContext, useEffect, useRef } from "react";
import alarmClock from "../../../assets/lotties/alarm-clock.json";
import artist from "../../../assets/lotties/artist.json";
import coding from "../../../assets/lotties/coding.json";
import network from "../../../assets/lotties/network.json";
import notes from "../../../assets/lotties/notes.json";
import reactLogo from "../../../assets/lotties/react-logo.json";

import { MousePositionContext } from "../../../context";
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
  const { mousePosition, setMousePosition } = useContext(MousePositionContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition([event.clientX, event.clientY]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   console.log("x,y => ", mousePosition[0], mousePosition[1]);

  //   const element = cursorRef.current;
  //   if (!element) return;
  //   element.style.top = `${mousePosition[1]}px`;
  //   element.style.left = `${mousePosition[0]}px`;
  // }, [mousePosition]);

  return (
    <Box ref={containerRef}>
      <div ref={cursorRef} className="movingCircle"></div>
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
