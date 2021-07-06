import styled, { keyframes } from "styled-components";

export const SideWrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.sideMenu ? "block" : "none")};
  left: 0;
  width: 20vw;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
  animation: 0.7s ${(props) => (props.sideMenu ? showUp : showOut)};
`;

export const showUp = keyframes`
0% {
    transform:translate(-100%,0);
}
100% {
    transform:translate(0,0)
}
`;

export const showOut = keyframes`
0% {
    transform:translate(0,0);
}
100% {
    transform:translate(-100%,0)
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
