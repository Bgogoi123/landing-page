import { Flex } from "@mantine/core";
import Lottie from "lottie-react";
import alarmClock from "../../../assets/lotties/alarm-clock.json";
import artist from "../../../assets/lotties/artist.json";
import coding from "../../../assets/lotties/coding.json";
import network from "../../../assets/lotties/network.json";
import notes from "../../../assets/lotties/notes.json";
import reactLogo from "../../../assets/lotties/react-logo.json";

const Icons = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      sx={{ padding: "1em", zIndex: 999 }}
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        sx={{ width: "100%" }}
      >
        <Lottie
          animationData={reactLogo}
          loop={true}
          style={{ width: "15%", height: "15%" }}
        />
        <Lottie
          animationData={coding}
          loop={true}
          style={{ width: "25%", height: "25%" }}
        />
      </Flex>

      <Flex
        direction="row"
        justify="center"
        align="center"
        sx={{ width: "100%" }}
      >
        <Lottie
          animationData={notes}
          loop={true}
          style={{ width: "22%", height: "22%" }}
        />
        <Lottie
          animationData={alarmClock}
          loop={true}
          style={{ width: "22%", height: "22%" }}
        />
      </Flex>

      <Flex
        direction="row"
        justify="center"
        align="center"
        sx={{ width: "100%" }}
      >
        <Lottie
          animationData={artist}
          loop={true}
          style={{ width: "22%", height: "22%" }}
        />
        <Lottie
          animationData={network}
          loop={true}
          style={{ width: "22%", height: "22%" }}
        />
      </Flex>
    </Flex>
  );
};

export default Icons;
