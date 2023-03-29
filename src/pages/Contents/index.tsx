import { Flex } from "@mantine/core";
import { useContext, useEffect, useRef, useState } from "react";
import brush from "../../assets/images/brush.svg";
import circle from "../../assets/images/circle.svg";
import code from "../../assets/images/code.svg";
import { MouseOverSectionContext, MousePositionContext } from "../../context";
import "../animations.css";
import Footer from "../Footer";
import {
  handleCursorAnimation,
  handleMouseMove,
  handleMouseOverWelcome,
} from "./functions";
import Introduction from "./Introduction";
import Profile from "./Profile";
import Projects from "./Projects";
import WelcomePage from "./Welcome";
import Waves from "./Welcome/Waves";

const Contents = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const welcomeContainerRef = useRef<HTMLDivElement>(null);

  const element = cursorRef.current;
  const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);
  const { mouseOverSection, setMouseOverSection } = useContext(
    MouseOverSectionContext
  );

  useEffect(() => {
    handleMouseMove({ setMousePosition });
  }, []);

  useEffect(() => {
    if (!element) return;
    element.style.top = `${mousePosition[1]}px`;
    element.style.left = `${mousePosition[0]}px`;
  }, [mousePosition]);

  useEffect(() => {
    handleCursorAnimation({
      element,
      mouseOverSection,
      setCursorStyle,
      circle,
      code,
      brush,
    });
  }, [mouseOverSection]);

  useEffect(() => {
    handleMouseOverWelcome({
      setMouseOverSection,
      elementRef: welcomeContainerRef,
    });
  }, []);

  return (
    <MousePositionContext.Provider value={{ mousePosition, setMousePosition }}>
      <Flex direction="column" style={cursorStyle}>
        <div ref={cursorRef} className="movingCircle"></div>

        <div ref={welcomeContainerRef}>
          <WelcomePage />
          <Waves />
        </div>
        <Introduction />
        <Projects />
        <Profile />
        <Footer />
      </Flex>
    </MousePositionContext.Provider>
  );
};

export default Contents;
