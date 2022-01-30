import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Loading from "react-loading";

import Button from "../Button";
import Input from "../Input";
import Textarea from "./../Textarea";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./config";

import { color } from "../../utils/styles";
import { FormContainer, FormRow, SendingContainer } from "./Styles";

const ContactForm = ({ send }) => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  useEffect(() => {
    init(USER_ID);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => {
        setSending(false);
        send();
        e.target.reset();
      },
      (error) => {
        alert(error.text);
      }
    );
  };

  const nameConfig = {
    label: "Name",
    type: "text",
    name: "user_name",
    required: true,
  };

  const emailConfig = {
    label: "Email",
    type: "email",
    name: "user_email",
    required: true,
  };

  const subjectConfig = {
    label: "Subject",
    name: "subject",
    required: true,
  };

  const messageConfig = {
    label: "Message",
    type: "text",
    name: "message",
    required: true,
  };

  return sending ? (
    <SendingContainer>
      <Loading type="bars" color={color.primary} height={100} width={100} />
    </SendingContainer>
  ) : (
    <FormContainer onSubmit={sendEmail} ref={form}>
      <FormRow>
        <Input {...nameConfig} />
        <Input {...emailConfig} />
      </FormRow>
      <Input {...subjectConfig} />
      <Textarea {...messageConfig} />
      <Button primary type="submit" value="Send">
        Send message
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
