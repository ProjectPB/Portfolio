import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 25px 0;
`;

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 0.3;
  margin-right: 30px;

  @media (max-width: 768px) {
    text-align: center;
    flex: 1;
    margin-bottom: 10px;
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
    & > h1,
    h2 {
      margin-bottom: 5px;
    }
  }
`;

export const TextLarge = styled.h1`
  display: block;
  font-size: 24px;
  font-weight: 600;
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 400;
`;

export const EmailText = styled.h3`
  display: block;
  font-size: 20px;
  font-weight: 600;
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
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  flex: 0.7;
`;
