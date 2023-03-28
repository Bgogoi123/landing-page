import { Flex } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import brush from "../../assets/images/brush.svg";
import circle from "../../assets/images/circle.svg";
import code from "../../assets/images/code.svg";
import { MouseOverSectionContext, MousePositionContext } from "../../context";
import "../animations.css";
import Footer from "../Footer";
import Profile from "./Profile";
import Projects from "./Projects";
import WelcomePage from "./Welcome";
import Waves from "./Welcome/Waves";

const Contents = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const element = cursorRef.current;
  const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);
  const [mouseOverSection, setMouseOverSection] = useState<{
    welcome: boolean;
    pomodoro: boolean;
    codeEditor: boolean;
    sketchbook: boolean;
    profile: boolean;
  }>({
    welcome: false,
    pomodoro: false,
    codeEditor: false,
    sketchbook: false,
    profile: false,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition([event.pageX, event.pageY]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!element) return;
    element.style.top = `${mousePosition[1]}px`;
    element.style.left = `${mousePosition[0]}px`;
  }, [mousePosition]);

  useEffect(() => {
    if (!element) return;
    if (mouseOverSection.welcome) {
      element.classList.remove("profileCursor");
      element.classList.remove("codeEditorCursor");
      element.classList.remove("codeEditorCursor");
      element.classList.remove("sketchbookCursor");
      element.classList.remove("pomodoroCursor");
      element.classList.add("movingCircle");
      setCursorStyle({
        cursor: "none",
      });
    }

    // mouse over pomodoro
    if (mouseOverSection.pomodoro) {
      element.classList.remove("movingCircle");
      element.classList.remove("profileCursor");
      element.classList.remove("codeEditorCursor");
      element.classList.remove("codeEditorCursor");
      element.classList.remove("sketchbookCursor");
      element.classList.add("pomodoroCursor");
      setCursorStyle({
        cursor: `url(${circle}) 10 20, pointer`,
      });
    }

    // mouse over code editor
    if (mouseOverSection.codeEditor) {
      element.classList.remove("movingCircle");
      element.classList.remove("profileCursor");
      element.classList.remove("pomodoroCursor");
      element.classList.remove("sketchbookCursor");
      element.classList.add("codeEditorCursor");
      setCursorStyle({
        cursor: `url(${code}) 10 20, pointer`,
      });
    }

    // mouse over sketchbook
    if (mouseOverSection.sketchbook) {
      element.classList.remove("movingCircle");
      element.classList.remove("profileCursor");
      element.classList.remove("pomodoroCursor");
      element.classList.remove("codeEditorCursor");
      element.classList.add("sketchbookCursor");
      setCursorStyle({
        cursor: `url(${brush}) 10 20, pointer`,
      });
    }

    // mouse over profile
    if (mouseOverSection.profile) {
      element.classList.remove("pomodoroCursor");
      element.classList.remove("movingCircle");
      element.classList.remove("codeEditorCursor");
      element.classList.remove("sketchbookCursor");
      element.classList.add("profileCursor");
      setCursorStyle({
        cursor: `url(${circle}) 10 20, pointer`,
      });
    }
  }, [mouseOverSection]);

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
    <MousePositionContext.Provider value={{ mousePosition, setMousePosition }}>
      <MouseOverSectionContext.Provider
        value={{ mouseOverSection, setMouseOverSection }}
      >
        <Flex direction="column" style={cursorStyle}>
          <div ref={cursorRef} className="movingCircle"></div>

          <div ref={containerRef}>
            <WelcomePage />
            <Waves />
          </div>
          <Projects />
          <Profile />
          <Footer />
        </Flex>
      </MouseOverSectionContext.Provider>
    </MousePositionContext.Provider>
  );
};

export default Contents;
