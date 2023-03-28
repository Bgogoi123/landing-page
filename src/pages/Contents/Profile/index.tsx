import { Flex, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import workingGirl from "../../../assets/lotties/working-girl.json";
import codeEditor from "../../../assets/lotties/codeEditor.json";
import ProjectsContainer from "../../../components/ProjectsContainer";
import { MouseOverSectionContext } from "../../../context";
import { codeEditorIcon, IconStyle } from "../Projects/projectStyles";

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
      {/* <Flex gap="10px">
        <Button variant="light" color="violet" className="githubLinkButton">
          Github Link
        </Button>
        <Button variant="light" color="violet" className="demoLinkButton">
          Demo
        </Button>
      </Flex> */}
    </Flex>
  );
};

// const Contents = () => {
//   return (
//     <Flex
//       direction="column"
//       gap="20px"
//       sx={{
//         width: "50%",
//       }}
//     >
//       <Text className="projectText" sx={{ textAlign: "right" }}>
//         Hello, I am Samantha.
//       </Text>
//       <Text sx={{ fontSize: "20px", textAlign: "right" }}>
//         I’ve been working as a social media manager for the past 7 years. I’ve
//         been working as a social media manager for the past 7 years. I’ve been
//         working as a social media manager for the past 7 years. I’ve been
//         working as a social media manager for the past 7 years. I’ve been
//         working as a social media manager for the past 7 years.
//       </Text>
//     </Flex>
//   );
// };

const Profile = () => {
  const codeEditorRef = useRef<HTMLDivElement>(null);
  const { setMouseOverSection } = useContext(MouseOverSectionContext);
  // const { setMouseOverSection } = useContext(MouseOverSectionContext);
  // const profileRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleMouseover = () => {
  //     setMouseOverSection({
  //       welcome: false,
  //       pomodoro: false,
  //       codeEditor: false,
  //       sketchbook: false,
  //       profile: true,
  //     });
  //   };

  //   if (!profileRef.current) return;
  //   profileRef.current.addEventListener("mouseover", handleMouseover);

  //   return () => {
  //     window.removeEventListener("mouseover", handleMouseover);
  //   };
  // }, []);

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

    if (!codeEditorRef.current) return;
    codeEditorRef.current.addEventListener("mouseover", handleMouseover);

    return () => {
      window.removeEventListener("mouseover", handleMouseover);
    };
  }, []);

  return (
    <div ref={codeEditorRef}>
      <ProjectsContainer
        lottieFile={workingGirl}
        lottieFileStyle={codeEditorIcon}
        contents={<Contents />}
        justifyContents="flex-end"
      />
    </div>
    // <div ref={profileRef}>
    //   <ProjectsContainer
    //     justifyContents="flex-end"
    //     alignItems="flex-start"
    //     flexGap="30px"
    //     backgroundColor="#ae93fa"
    //     contents={<Contents />}
    //     lottieFile={workingGirl}
    //     lottieFileStyle={IconStyle}
    //     styles={{
    //       padding: "30px",
    //     }}
    //   />
    // </div>
  );
};

export default Profile;
