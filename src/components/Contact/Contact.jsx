import { ContactContainer, ContactForm, ContactTitle } from "./Contact.styled";

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <div>
        <ContactForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </ContactForm>
      </div>
    </ContactContainer>
  );
}

export default Contact;
