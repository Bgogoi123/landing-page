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
  profileHeadingText,
  profileLottieStyle,
  profileText,
} from "./profileStyles";

const Contents = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  const redirectToLinkedin = () => {};
  const displayEmailID = () => {};

  if (matches) {
    return (
      <Flex direction="column" gap={"xl"}>
        <Text sx={profileHeadingText}>Hi! I am Bharati Gogoi.</Text>
        <Flex direction="column" justify="flex-end" align="flex-end">
          <Text sx={profileText}>
            I am an experienced frontend developer with a passion for creating
            dynamic and user-friendly interfaces.
          </Text>
          <Text sx={profileText}>
            Proficient in Javascript, ReactJS, typescript, CSS, mantine, and
            material UI.
          </Text>
        </Flex>
        <Flex direction="row" justify="flex-end" align="center">
          <Text
            sx={{
              textAlign: "center",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={linkedin}
              style={{ cursor: "pointer" }}
              onClick={redirectToLinkedin}
            />
            <img
              src={email}
              style={{ cursor: "pointer" }}
              onClick={displayEmailID}
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
          //  sx={{ textAlign: "center", fontSize: "40px" }}
        >
          Hi! I am Bharati Gogoi
        </Text>
        <Flex direction="column" justify="center" align="center">
          <Text
            //  sx={profileText}
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
            //  sx={profileText}
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
