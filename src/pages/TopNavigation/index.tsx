import { Flex, Tabs } from "@mantine/core";
import { useContext } from "react";
import logo from "../../assets/logos/logo.svg";
import { TabsContext } from "../../context";

const TopNavigation = () => {
  const { setTab } = useContext(TabsContext);
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      sx={{
        padding: "10px",
        backgroundColor: "#6b49cc",
        color: "#fff",
        zIndex: 999,
      }}
    >
      <div>
        <img src={logo} width={50} height={50} style={{ cursor: "pointer" }} />
      </div>
      <Tabs defaultValue="about" sx={{ border: "1px solid #fff" }}>
        <Tabs.List>
          <Tabs.Tab value="projects" onClick={() => setTab("projects")}>
            Projects
          </Tabs.Tab>
          <Tabs.Tab value="about" onClick={() => setTab("about")}>
            About
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
};

export default TopNavigation;
