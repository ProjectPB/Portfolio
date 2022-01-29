import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useWidth } from "./../../hooks";
import Title from "./../Title";
import ContactForm from "../ContactForm";
import { Email } from "@mui/icons-material";
import {
  ContactContainer,
  ContactWrapper,
  FormContainer,
  TextContainer,
  TextLarge,
  TextMedium,
  EmailContainer,
  UpperText,
  EmailText,
  LeftContainer,
  NewMessageButton,
  MessageText,
} from "./Styles";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const width = useWidth();
  const titleConfig = {
    upperText: "Contact Me!",
  };

  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <ContactContainer id="contact">
      <Title {...titleConfig} />

      <ContactWrapper>
        <LeftContainer>
          <UpperText>
            <TextLarge>Interested in working together?</TextLarge>
            <TextMedium>
              Please reach me out by an email or send me a message through the
              form {width > "768" ? "on the right" : "below"}.
            </TextMedium>
          </UpperText>
          <EmailContainer data-aos="zoom-in">
            <Email />
            <EmailText>pbprojects01@gmail.com</EmailText>
          </EmailContainer>
        </LeftContainer>

        <FormContainer>
          {!messageSent && <ContactForm send={() => setMessageSent(true)} />}
          {messageSent && (
            <TextContainer>
              <MessageText>Thank you for your message!</MessageText>
              <NewMessageButton primary onClick={() => setMessageSent(false)}>
                New Message
              </NewMessageButton>
            </TextContainer>
          )}
        </FormContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
