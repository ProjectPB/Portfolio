import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import Input from "../Input";
import Textarea from "./../Textarea";
import { FormContainer, FormRow } from "./Styles";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qkqbp4z",
        "template_26dhx9w",
        form.current,
        "user_oLUpPMIC5F8v3LfbSPTit"
      )
      .then(
        () => {
          alert("Thank you for a message!");
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

  return (
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
