import wave1 from "../../../assets/icons/wave1.svg";
import wave2 from "../../../assets/icons/wave2.svg";
import "./styles.css";

const Waves = () => {
  return (
    <div>
      <img src={wave1} className="waveTwo" />
      <img src={wave2} className="waveOne" />
    </div>
  );
};

export default Waves;
