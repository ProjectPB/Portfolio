import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;

  & > div {
    margin-bottom: 10px;
  }

  & > :last-child {
    width: 100%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    width: calc(50% - 5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0 !important;

    & > div {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
