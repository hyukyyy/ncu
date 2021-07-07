import styled, { css, keyframes } from "styled-components";

export const SideBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
  display: ${(props) => (props.sideMenu ? "block" : "none")};
`;

export const SideWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 20vw;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
  ${(props) =>
    props.sideMenu === null &&
    css`
      display: none;
    `}
  ${(props) =>
    props.sideMenu !== null &&
    css`
      animation: 0.7s ${(props) => (props.sideMenu ? showUp : showOut)} forwards;
    `}
`;

export const showUp = keyframes`
0% {
    display:block;
    transform:translate(-100% ,0);
}
100% {
    transform:translate(0,0);
}
`;

export const showOut = keyframes`
0% {
    transform:translate(0,0);
}
100% {
    transform:translate(-100% ,0);
    display:none;
}
`;

export const SideCloseButton = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
