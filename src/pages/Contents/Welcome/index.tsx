import { useContext, useEffect, useRef } from "react";
import { MouseOverSectionContext } from "../../../context";
import "../../animations.css";
import Icons from "./Icons";

const WelcomePage = () => {
  const { mouseOverSection, setMouseOverSection } = useContext(
    MouseOverSectionContext
  );

  return (
    <div>
      {/* <img src={wave2} className="wave" />
      <img src={wave4} className="wave2" /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "2em",
          width: "80%",
          zIndex: 999,
          backgroundColor: "#fff",
        }}
      >
        <Icons />
        <div style={{ width: "100%" }}>
          <b className="typing">Welcome</b>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
