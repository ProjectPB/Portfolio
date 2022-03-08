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
  EmailContainer,
  EmailText,
  LeftContainer,
  NewMessageButton,
  MessageText,
  HeadingWrapper,
  Heading,
  Text,
  SentContainer,
} from "./Styles";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const width = useWidth();
  const titleConfig = {
    sectionName: "Contact Me!",
  };

  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <ContactContainer id="contact">
      <Title {...titleConfig} />

      <ContactWrapper>
        <LeftContainer>
          <HeadingWrapper>
            <Heading>Interested in working together?</Heading>
            <Text>
              Please reach out to me by email or send me a message through the
              form {width > "768" ? "on the right" : "below"}.
            </Text>
            <Text>Feedback regarding my work would also be appreciated!</Text>
          </HeadingWrapper>
          <EmailContainer data-aos="zoom-in">
            <Email />
            <EmailText>pbprojects01@gmail.com</EmailText>
          </EmailContainer>
        </LeftContainer>

        <FormContainer>
          {!messageSent && <ContactForm send={() => setMessageSent(true)} />}
          {messageSent && (
            <SentContainer>
              <MessageText>Thank you for your message!</MessageText>
              <NewMessageButton primary onClick={() => setMessageSent(false)}>
                New Message
              </NewMessageButton>
            </SentContainer>
          )}
        </FormContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
