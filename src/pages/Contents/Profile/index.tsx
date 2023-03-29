import { Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import workingGirl from "../../../assets/lotties/working-girl.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { handleMouseOverProfile } from "../functions";
import { profileHeadingText, profileText } from "./profileStyles";

const Contents = () => {
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
    </Flex>
  );
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
    <div
      ref={profileRef}
      style={{
        height: "100px",
      }}
    >
      <ProjectsContainer
        lottieFile={workingGirl}
        lottieFileStyle={{
          padding: "2%",
          width: "20%",
          height: "20%",
        }}
        contents={<Contents />}
        justifyContents="flex-end"
      />
    </div>
  );
};

export default Profile;
