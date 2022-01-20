import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  padding: 0 20px;
`;

export const TextLarge = styled.h1`
  display: block;
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
