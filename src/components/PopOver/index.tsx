import { Popover } from "@mantine/core";

const PopOver = ({
  toggleButton,
  popOverContent,
}: {
  toggleButton: JSX.Element;
  popOverContent: JSX.Element;
}) => {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>{toggleButton}</Popover.Target>
      <Popover.Dropdown>{popOverContent}</Popover.Dropdown>
    </Popover>
  );
};

export default PopOver;
