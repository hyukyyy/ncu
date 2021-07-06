import { HeaderWrapper, SideMenuButton } from "../../styles/headerComponents";
const Header = ({ openSideMenu, scrollTop }) => {
  return (
    <HeaderWrapper scrollTop={scrollTop}>
      <SideMenuButton onClick={() => openSideMenu()}>Menu</SideMenuButton>
      header
    </HeaderWrapper>
  );
};

export default Header;
