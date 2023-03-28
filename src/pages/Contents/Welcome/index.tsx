import "../../animations.css";
import Icons from "./Icons";

const WelcomePage = () => {
  return (
    <div className="welcomeContainer">
      <Icons />
      <div style={{ width: "100%" }}>
        <b className="typing">Welcome</b>
      </div>
    </div>
  );
};

export default WelcomePage;
