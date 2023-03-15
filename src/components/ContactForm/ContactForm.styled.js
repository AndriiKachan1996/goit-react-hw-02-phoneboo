import styled from '@emotion/styled';

export const FormContact = styled.form`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormField = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
`;

export const FormInput = styled.input`
  outline: none;
`;

export const FormButton = styled.button`
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);

  :active {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;
