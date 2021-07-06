import { useEffect, useState } from "react";
import ContentWrapper from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Side from "./Side";

const Layout = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [sideMenu, setSideMenu] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = winScroll / (scrollHeight - clientHeight);
    setScrollTop(scrollTop);
    console.log(scrollTop);
  };

  const openSideMenu = () => {
    setSideMenu(true);
    console.log(sideMenu);
  };
  const closeSideMenu = () => {
    setSideMenu(false);
    console.log(sideMenu);
  };
  return (
    <>
      <Header scrollTop={scrollTop} openSideMenu={openSideMenu} />
      <Side sideMenu={sideMenu} closeSideMenu={closeSideMenu} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default Layout;
