import { useContext, useEffect, useRef } from "react";
import { MouseOverSectionContext } from "../../context";

const Footer = () => {
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
    <div
      style={{
        backgroundColor: "#4e388f",
        padding: "10px",
        height: "100px",
        color: "#fff",
        textAlign: "center",
      }}
      ref={containerRef}
    >
      Temp Footer
    </div>
  );
};

export default Footer;
