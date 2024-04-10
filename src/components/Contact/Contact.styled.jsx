import styled from "styled-components";
import formImg from "@/assets/form.jpg";
import { primaryFont, secondaryFont } from "../fonts";

export const ContactContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const ContactWrapper = styled.div`
  padding: 2.4rem 9.6rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  position: relative;
  background: url(${formImg}), linear-gradient(#000000, #00000050);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

export const ContactTitle = styled.h2`
  text-align: center;
  font-family: ${secondaryFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16667;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.mainTextColorRev};
`;

export const ContactText = styled.p`
  text-align: center;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColorRev};
  margin-bottom: 4.8rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1.2rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 1.2rem;
  width: 100%;
  z-index: 20;
  padding: 2.4rem;

  @media (min-width: 768px) {
    max-width: 36rem;
  }
`;

export const ContactInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.colors.lightColor};

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.darkColor};

  transition: all var(--primary-transition);

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.experienceGreyColor};
  }

  &:focus {
    outline: none;
    box-shadow: ${(p) => p.theme.colors.boxShadow} 0px 1px 12px;
  }
`;

export const ContactTextarea = styled.textarea`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.colors.lightColor};
  resize: none;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.darkColor};

  transition: all var(--primary-transition);

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.experienceGreyColor};
  }

  &:focus {
    outline: none;
    box-shadow: ${(p) => p.theme.colors.boxShadow} 0px 1px 12px;
  }
`;

export const ContactBtn = styled.button`
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.mainTextColorRev};
  transition: all var(--primary-transition);
  transition: all 0.5s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;
