import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Textarea from "./../Textarea";
import { FormContainer, FormRow } from "./Styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `name: ${name}, email: ${email}, subject: ${subject}, message: ${message}`
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const nameConfig = {
    label: "Name",
    value: name,
    handleChange: (e) => setName(e.target.value),
    required: true,
  };

  const emailConfig = {
    label: "Email",
    type: "email",
    value: email,
    handleChange: (e) => setEmail(e.target.value),
    required: true,
  };

  const subjectConfig = {
    label: "Subject",
    value: subject,
    handleChange: (e) => setSubject(e.target.value),
    required: true,
  };

  const messageConfig = {
    label: "Message",
    type: "text",
    value: message,
    handleChange: (e) => setMessage(e.target.value),
    required: true,
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <FormRow>
        <Input {...nameConfig} />
        <Input {...emailConfig} />
      </FormRow>
      <Input {...subjectConfig} />
      <Textarea {...messageConfig} />
      <Button primary type="submit">
        Send message
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
