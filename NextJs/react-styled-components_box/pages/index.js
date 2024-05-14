import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
import { StyledBox } from "@/components/BoxWithStyledComponents/index.js";

export default function HomePage() {
  const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </FlexContainer>
  );
}
