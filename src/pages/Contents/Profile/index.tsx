import { Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext, useEffect, useRef } from "react";
import workingGirl from "../../../assets/lotties/working-girl.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverProfile } from "../functions";
import email from "../../../assets/images/email.svg";
import linkedin from "../../../assets/images/linkedin.svg";

import { projectText } from "../styles";
import {
  cursorPointer,
  popOverContainer,
  popOverText,
  profileHeadingText,
  profileLottieStyle,
  profileText,
} from "./profileStyles";
import PopOver from "../../../components/PopOver";

const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  const redirectToLinkedin = () => {
    window.open("https://www.linkedin.com/in/bharatigogoi/", "_blank");
  };

  if (matches) {
    return (
      <Flex direction="column" gap={"xl"} align="flex-end">
        <Text sx={profileHeadingText}>Hi! I am Bharati Gogoi.</Text>
        <Flex direction="column" justify="flex-end" align="flex-end">
          <Text sx={profileText}>
            I am an experienced frontend developer with a passion for creating
            dynamic and user-friendly interfaces.
          </Text>
          <Text sx={profileText}>
            Proficient in Javascript, ReactJS, Typescript, D3, CSS, Mantine, and
            Material UI.
          </Text>
        </Flex>
        <Flex direction="row" justify="flex-end" align="center">
          <Text sx={popOverContainer}>
            <img
              src={linkedin}
              style={cursorPointer}
              onClick={redirectToLinkedin}
            />
            <PopOver
              toggleButton={<img src={email} style={cursorPointer} />}
              popOverContent={<Text sx={popOverText}>bgogoi055@gmail.com</Text>}
            />
          </Text>
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex direction="column" gap={"xl"}>
        <Text
          sx={[
            projectText,
            { textAlign: "center" },
            matches
              ? { fontSize: "200%" }
              : { fontSize: "25px", lineHeight: "30px" },
          ]}
        >
          Hi! I am Bharati Gogoi
        </Text>
        <Flex direction="column" justify="center" align="center">
          <Text
            sx={[
              projectText,
              matches
                ? { fontSize: "200%" }
                : { fontSize: "15px", lineHeight: "25px" },
            ]}
          >
            I am an experienced frontend developer with a passion for creating
            dynamic and user-friendly interfaces.
          </Text>
          <Text
            sx={[
              projectText,
              matches
                ? { fontSize: "200%" }
                : { fontSize: "15px", lineHeight: "25px" },
            ]}
          >
            Proficient in Javascript, ReactJS, typescript, CSS, mantine, and
            material UI.
          </Text>
        </Flex>
        <Flex justify="center" align="center" gap="10px">
          <img
            src={linkedin}
            style={cursorPointer}
            onClick={redirectToLinkedin}
          />
          <PopOver
            toggleButton={<img src={email} style={cursorPointer} />}
            popOverContent={<Text sx={popOverText}>bgogoi055@gmail.com</Text>}
          />
        </Flex>
      </Flex>
    );
  }
};

const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const { setMouseOverSection } = useContext(MouseOverSectionContext);

  useEffect(() => {
    handleMouseOverProfile({
      elementRef: profileRef,
      setMouseOverSection,
    });
  }, []);

  return (
    <div ref={profileRef}>
      <ProjectsContainer
        lottieFile={workingGirl}
        lottieFileStyle={profileLottieStyle}
        contents={<Contents />}
        justifyContents="flex-end"
      />
    </div>
  );
};

export default Profile;
