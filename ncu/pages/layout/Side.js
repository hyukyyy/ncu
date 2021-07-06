import { SideCloseButton, SideWrapper } from "../../styles/sideComponents";

const Side = ({ closeSideMenu, sideMenu }) => {
  return (
    <SideWrapper sideMenu={sideMenu}>
      <SideCloseButton onClick={() => closeSideMenu()}>X</SideCloseButton>
      side
    </SideWrapper>
  );
};

export default Side;
