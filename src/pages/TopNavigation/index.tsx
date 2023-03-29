import { Flex, Tabs } from "@mantine/core";
import { useEffect, useContext, useRef } from "react";
import logo from "../../assets/logos/logo.svg";
import { MouseOverSectionContext, TabsContext } from "../../context";
import { handleRemoveCursorAnimation } from "../Contents/functions";
import { root } from "./styles";

const TopNavigation = () => {
  const { setTab } = useContext(TabsContext);
  const navigationRef = useRef<HTMLDivElement>(null);
  const { mouseOverSection } = useContext(MouseOverSectionContext);

  useEffect(() => {
    const element = navigationRef.current;

    handleRemoveCursorAnimation({
      element,
    });
  }, [mouseOverSection]);

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      sx={root}
      ref={navigationRef}
    >
      <div>
        <img src={logo} width={50} height={50} style={{ cursor: "pointer" }} />
      </div>
      {/* <Tabs
        defaultValue="about"
        variant="outline"
        radius="xl"
        styles={{
          root: {
            // border: "1px dashed red",
            borderBottom: "1px solid lightgreen",
          },
          tab: {
            // border: "1px solid #d9ccf5",
            borderBottom: "1px solid red",
          },
          tabLabel: {
            color: "#d9ccf5",
            borderBottom: "1px solid lightblue",
          },
          // tabsList: { backgroundColor: "red" },
          panel: { backgroundColor: "red" },
        }}
        // sx={{ border: "1px solid #fff" }}
      >
        <Tabs.List>
          <Tabs.Tab
            value="projects"
            onClick={() => setTab("projects")}
            color="red"
          >
            Projects
          </Tabs.Tab>
          <Tabs.Tab value="about" onClick={() => setTab("about")}>
            About
          </Tabs.Tab>
        </Tabs.List>
      </Tabs> */}
    </Flex>
  );
};

export default TopNavigation;
