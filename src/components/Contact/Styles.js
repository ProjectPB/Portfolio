import styled from "styled-components";
import { color, font_size, font_weight } from "../../utils/styles";
import Button from "../Button";

export const ContactContainer = styled.div`
  padding: 75px 0;
  background-color: ${color.backgroundDark};
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 25px 0 0;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 30px auto 15px;

  @media (max-width: 992px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 15px auto 0;
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
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const HeadingWrapper = styled.div`
  flex: 0.3;
  border-bottom: 1px solid ${color.primary};
  padding-bottom: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const SentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  ${font_size.medium}
  ${font_weight.regular}
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const MessageText = styled.h2`
  ${font_size.small}
  ${font_weight.medium}
  padding-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const NewMessageButton = styled(Button)`
  margin-top: 15px;
`;

export const Text = styled.h2`
  ${font_size.small}
  ${font_weight.regular}
  color: ${color.textLight};
  margin-top: 10px;
`;

export const EmailText = styled.h3`
  ${font_size.custom(20)}
  ${font_weight.medium};

  @media (max-width: 600px) {
    ${font_size.small}
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  & > .MuiSvgIcon-root {
    margin-right: 10px !important;
    width: 35px !important;
    height: 35px !important;
    color: ${color.primaryDark};
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid ${color.backgroundMedium};
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
    min-height: 425px;
  }
`;
