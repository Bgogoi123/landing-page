import { Flex, Text } from "@mantine/core";
import ProjectsContainer from "../../../components/ProjectsContainer";
import workingGirl from "../../../assets/lotties/working-girl.json";
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
  return (
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
  );
};

export default Profile;
