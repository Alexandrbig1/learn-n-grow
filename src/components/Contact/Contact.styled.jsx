import styled from "styled-components";
import formImg from "@/assets/form.jpg";

export const ContactContainer = styled.section`
  margin: 0 auto;
  padding: 2.4rem 0;
  width: 80%;
  height: 44rem;
  position: relative;
  background: url(${formImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContactTitle = styled.h2`
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;
