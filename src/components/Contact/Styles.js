import styled from "styled-components";
import Button from "../Button";

export const ContactContainer = styled.div`
  padding: 25px 0;
`;

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 0.3;
  margin-right: 30px;

  @media (max-width: 768px) {
    text-align: center;
    flex: 1;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const UpperText = styled.div`
  flex: 0.3;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  margin-bottom: 10px;

  & > h1,
  h2 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;

    & > h1,
    h2 {
      margin-bottom: 5px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextLarge = styled.h1`
  display: block;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const MessageText = styled(TextLarge)`
  font-size: 20px;
  padding-top: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const NewMessageButton = styled(Button)`
  margin-top: 15px;
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #8c8c8c;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const EmailText = styled.h3`
  display: block;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  & > .MuiSvgIcon-root {
    margin-right: 10px !important;
    width: 35px !important;
    height: 35px !important;
    color: orangered;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid lightgray;
    justify-content: center;
    padding-bottom: 10px;
  }

  @media (max-width: 600px) {
    & > .MuiSvgIcon-root {
      margin-right: 5px !important;
      width: 25px !important;
      height: 25px !important;
    }
  }
`;

export const FormContainer = styled.div`
  flex: 0.7;
  min-height: 325px;

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;
