import { Flex, Text } from "@mantine/core";
import Lottie from "lottie-react";
import codeMonitor from "../../../assets/images/codeMonitor.svg";
import profile from "../../../assets/lotties/profile.json";
import "../../animations.css";
import {
  subTextContainer,
  welcomeImage,
  welcomeImageContainer,
  welcomeTextContainer,
} from "./welcomeStyles";

const WelcomePage = () => {
  return (
    <Flex
      direction={{ base: "column", xs: "row" }}
      justify="space-around"
      align="center"
    >
      <Flex justify="flex-end" style={welcomeImageContainer}>
        <Lottie animationData={profile} style={welcomeImage} />
      </Flex>

      <div style={welcomeTextContainer}>
        <Flex
          direction={{
            base: "column",
            xs: "row",
          }}
          justify="center"
          align="flex-start"
        >
          <img src={codeMonitor} className="codingMonitor" />
          <Flex
            direction="column"
            justify="center"
            align="flex-end"
            gap="lg"
            sx={{ position: "relative" }}
          >
            <Text className="headingText">Welcome</Text>
            <div style={subTextContainer}>
              <Text className="subText">Paragraph text content</Text>
            </div>
          </Flex>
        </Flex>
      </div>
    </Flex>

    // original:
    // <div className="welcomeContainer">
    //   <Icons />
    //   <div style={{ width: "100%" }}>
    //     <b className="typing">Welcome</b>
    //   </div>
    // </div>
  );
};

export default WelcomePage;
