import { IHandleCursorAnimation, IHandleMouseOver } from "../../interfaces";

export const handleRemoveCursorAnimation = ({
  element,
}: {
  element: HTMLDivElement | null;
}) => {
  if (!element) return;
  element.classList.remove("movingCircle");
  element.classList.remove("profileCursor");
  element.classList.remove("codeEditorCursor");
  element.classList.remove("codeEditorCursor");
  element.classList.remove("sketchbookCursor");
  element.classList.remove("pomodoroCursor");
  element.style.cursor = "default";
};

export const handleCursorAnimation = ({
  element,
  mouseOverSection,
  setCursorStyle,
  circle,
  code,
  brush,
}: IHandleCursorAnimation) => {
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
};

export const handleMouseMove = ({
  setMousePosition,
}: {
  setMousePosition: (value: React.SetStateAction<[number, number]>) => void;
}) => {
  const onMouseMove = (event: MouseEvent) => {
    setMousePosition([event.pageX, event.pageY]);
  };
  window.addEventListener("mousemove", onMouseMove);
  return () => {
    window.removeEventListener("mousemove", onMouseMove);
  };
};

export const handleMouseOverWelcome = ({
  setMouseOverSection,
  elementRef,
}: IHandleMouseOver) => {
  const onMouseOver = () => {
    setMouseOverSection({
      welcome: true,
      pomodoro: false,
      codeEditor: false,
      sketchbook: false,
      profile: false,
    });
  };

  if (!elementRef.current) return;
  elementRef.current.addEventListener("mouseover", onMouseOver);

  return () => {
    window.removeEventListener("mouseover", onMouseOver);
  };
};

export const handleMouseOverPomodoro = ({
  setMouseOverSection,
  elementRef,
}: IHandleMouseOver) => {
  const onMouseOver = () => {
    setMouseOverSection({
      welcome: false,
      pomodoro: true,
      codeEditor: false,
      sketchbook: false,
      profile: false,
    });
  };

  if (!elementRef.current) return;
  elementRef.current.addEventListener("mouseover", onMouseOver);
  elementRef.current.addEventListener("mouseout", () => {
    setMouseOverSection({
      welcome: true,
      pomodoro: false,
      codeEditor: false,
      sketchbook: false,
      profile: false,
    });
  });

  return () => {
    window.removeEventListener("mouseover", onMouseOver);
  };
};

export const handleMouseOverCodeEditor = ({
  setMouseOverSection,
  elementRef,
}: IHandleMouseOver) => {
  const onMouseOver = () => {
    setMouseOverSection({
      welcome: false,
      pomodoro: false,
      codeEditor: true,
      sketchbook: false,
      profile: false,
    });
  };

  if (!elementRef.current) return;
  elementRef.current.addEventListener("mouseover", onMouseOver);

  return () => {
    window.removeEventListener("mouseover", onMouseOver);
  };
};

export const handleMouseOverSketchbook = ({
  elementRef,
  setMouseOverSection,
}: IHandleMouseOver) => {
  const onMouseOver = () => {
    setMouseOverSection({
      welcome: false,
      pomodoro: false,
      codeEditor: false,
      sketchbook: true,
      profile: false,
    });
  };

  if (!elementRef.current) return;
  elementRef.current.addEventListener("mouseover", onMouseOver);

  return () => {
    window.removeEventListener("mouseover", onMouseOver);
  };
};

export const handleMouseOverProfile = ({
  elementRef,
  setMouseOverSection,
}: IHandleMouseOver) => {
  const onMouseOver = () => {
    setMouseOverSection({
      welcome: false,
      pomodoro: false,
      codeEditor: false,
      sketchbook: false,
      profile: true,
    });
  };

  if (!elementRef.current) return;
  elementRef.current.addEventListener("mouseover", onMouseOver);

  return () => {
    window.removeEventListener("mouseover", onMouseOver);
  };
};
