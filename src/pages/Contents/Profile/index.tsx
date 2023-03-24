import { Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import workingGirl from "../../../assets/lotties/working-girl.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { IconStyle } from "../Projects/projectStyles";

const Contents = () => {
  return (
    <Flex
      direction="column"
      gap="20px"
      sx={{
        width: "50%",
      }}
    >
      <Text className="projectText" sx={{ textAlign: "right" }}>
        Hello, my name is Samantha Johnson.
      </Text>
      <Text sx={{ fontSize: "20px", textAlign: "right" }}>
        I’ve been working as a social media manager for the past 7 years. I’ve
        been working as a social media manager for the past 7 years. I’ve been
        working as a social media manager for the past 7 years. I’ve been
        working as a social media manager for the past 7 years. I’ve been
        working as a social media manager for the past 7 years.
      </Text>
    </Flex>
  );
};

const Profile = () => {
  const { setMouseOverSection } = useContext(MouseOverSectionContext);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseover = () => {
      setMouseOverSection({
        welcome: false,
        pomodoro: false,
        codeEditor: false,
        sketchbook: false,
        profile: true,
      });
    };

    if (!profileRef.current) return;
    profileRef.current.addEventListener("mouseover", handleMouseover);

    return () => {
      window.removeEventListener("mouseover", handleMouseover);
    };
  }, []);

  return (
    <div ref={profileRef}>
      <ProjectsContainer
        justifyContents="flex-end"
        alignItems="flex-start"
        flexGap="30px"
        backgroundColor="#ae93fa"
        contents={<Contents />}
        lottieFile={workingGirl}
        lottieFileStyle={IconStyle}
        styles={{
          padding: "30px",
        }}
      />
    </div>
  );
};

export default Profile;
