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
    </Flex>
  );
};

export default TopNavigation;
