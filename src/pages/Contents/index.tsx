import { Flex } from "@mantine/core";
import { useEffect, useState, useRef } from "react";
import { MouseOverSectionContext, MousePositionContext } from "../../context";
import Profile from "./Profile";
import Projects from "./Projects";
import WelcomePage from "./Welcome";
import circle from "../../assets/images/circle.svg";

const Contents = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
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
    // console.log("y - ", mousePosition[1]);
    if (!element) return;
    // element.classList.add("movingCircle");
    element.style.top = `${mousePosition[1]}px`;
    element.style.left = `${mousePosition[0]}px`;
  }, [mousePosition]);

  useEffect(() => {
    console.log("mouseOverSection", mouseOverSection.profile);
    if (!element) return;
    if (mouseOverSection.welcome) {
      element.classList.add("movingCircle");
    }

    // mouse over pomodoro
    if (mouseOverSection.pomodoro) {
      element.classList.remove("movingCircle");
      element.classList.remove("profileCursor");
      element.classList.add("pomodoroCursor");
      // element.style.padding = "2.5em";
      // element.style.border = "3px solid #fff";
      // element.style.marginLeft = "-35px";
      setCursorStyle({
        cursor: `url(${circle}) 10 20, pointer`,
      });
    }

    // mouse over profile
    if (mouseOverSection.profile) {
      element.classList.remove("pomodoroCursor");
      element.classList.remove("movingCircle");
      element.classList.add("profileCursor");
      setCursorStyle({
        cursor: `url(${circle}) 10 20, pointer`,
      });
    }
  }, [mouseOverSection]);

  return (
    <MousePositionContext.Provider value={{ mousePosition, setMousePosition }}>
      <MouseOverSectionContext.Provider
        value={{ mouseOverSection, setMouseOverSection }}
      >
        <Flex direction="column" style={cursorStyle}>
          <div ref={cursorRef} className="movingCircle"></div>
          <WelcomePage />
          <Projects />
          <Profile />
        </Flex>
      </MouseOverSectionContext.Provider>
    </MousePositionContext.Provider>
  );
};

export default Contents;
