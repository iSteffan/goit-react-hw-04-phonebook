import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
`;

export const Form = styled(FormikForm)`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  width: 400px;
  background-color: #039be5;
  border: 1px solid gray;
  border-radius: 6px;
`;

export const Label = styled.label`
  font-size: 24px;
  color: white;
`;

export const Field = styled(FormikInput)`
  margin-left: 18px;
  height: 30px;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 5px;
  margin-left: auto;
  margin-top: 20px;

  font-size: 18px;
  background-color: yellow;
`;
