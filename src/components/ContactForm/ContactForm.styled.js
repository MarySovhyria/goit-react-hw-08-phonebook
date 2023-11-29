import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  width: 300px;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  margin-top: 5px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid;
  background-color: #49796B;
  color: white;
  :hover {
    background-color: #29AB87;
    color: black;
    border: 0px;
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;
