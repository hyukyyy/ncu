import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 6vh;
  background-color: rgba(0, 0, 0, ${(props) => 1 - props.scrollTop * 8});
  color: white;
  text-align: center;
`;

export const SideMenuButton = styled.div`
  position: absolute;
  left: 0;
  display: inline-block;
  width: 5rem;
  height: 100%;
  // background-color: white;
  // color: black;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  width: 5rem;
  height: 100%;
  background-color: none;
`;
