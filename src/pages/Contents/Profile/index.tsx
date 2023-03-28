import { Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import workingGirl from "../../../assets/lotties/working-girl.json";
import codeEditor from "../../../assets/lotties/codeEditor.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { codeEditorIcon, IconStyle } from "../Projects/projectStyles";
import { handleMouseOverProfile } from "../functions";

const Contents = () => {
  return (
    <Flex direction="column">
      <Text className="projectText" sx={{ textAlign: "right" }}>
        Hi! I am Samantha
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
        lottieFileStyle={codeEditorIcon}
        contents={<Contents />}
        justifyContents="flex-end"
      />
    </div>
  );
};

export default Profile;
