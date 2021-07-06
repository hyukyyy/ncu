import { SideCloseButton, SideWrapper } from "../../styles/sideComponents";

const Side = ({ closeSideMenu, sideMenu }) => {
  return (
    <>
      <SideWrapper sideMenu={sideMenu}>
        <SideCloseButton onClick={() => closeSideMenu()}>X</SideCloseButton>
        side
      </SideWrapper>
      {/* 백그라운드 클릭하면 꺼질수 있게 작업해야함 */}
      {/* <SideBackground sideMenu /> */}
    </>
  );
};

export default Side;
