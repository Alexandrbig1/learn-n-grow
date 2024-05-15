import { useRef } from "react";
import emailRegex from "../../regex/emailRegex";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import {
  ContactBtn,
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactText,
  ContactTextarea,
  ContactTitle,
  ContactWrapper,
} from "./Contact.styled";

function Contact() {
  const form = useRef();

  const handleNeedHelp = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const validEmail = emailRegex.test(data.email);
    const validMessage = data.message.length > 0;

    if (!(validEmail && validMessage)) {
      if (!validMessage && data.email.length === 0) {
        toast.warning(
          "Please fill in all required fields!",
          commonToastOptions
        );
      } else if (!validEmail) {
        toast.warning(
          "Please enter a valid email address!",
          commonToastOptions
        );
      } else {
        toast.warning("Please enter a message!", commonToastOptions);
      }
      return;
    }

    try {
      // await fetchEmailDB(data);
      // await emailjs.sendForm(
      //   VITE_EMAIL_ID,
      //   VITE_EMAIL_TEMPLATE_ID,
      //   form.current,
      //   {
      //     publicKey: VITE_EMAIL_API_KEY,
      //     from: "portfolio",
      //   }
      // );

      toast.success(
        "Thank you for reaching out! Your message has been received.",
        commonToastOptions
      );
    } catch (error) {
      toast.error(
        "Error submitting request. Please try again later.",
        commonToastOptions
      );
    } finally {
      form.current.reset();
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <ContactText>
          Please contact us directly at learnngrow@gmail.com or through this
          form.
        </ContactText>
        <ContactForm ref={form} onSubmit={handleNeedHelp}>
          <ContactInput type="text" name="name" placeholder="Your Name" />
          <ContactInput type="text" name="email" placeholder="Your Email" />
          <ContactTextarea
            name="message"
            placeholder="Your message"
            cols="30"
            rows="10"
          ></ContactTextarea>
          <ContactBtn type="submit">Send</ContactBtn>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
