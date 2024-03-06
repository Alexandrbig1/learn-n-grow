import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 6rem;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background: linear-gradient(to bottom, #fff, #be4fcf);
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  background-color: lightcyan;
`;
