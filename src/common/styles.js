import styled from "styled-components";

export const Heading1 = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
`;

const DefaultButton = styled.button`
  background-color: #b1b1b1;
  color: #000;
  border: none;
  border-radius: 14px;
  padding: 5px 10px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

export const AppPrimaryBtn = styled(DefaultButton)`
  background-color: #3a8df4;
  border: 1px solid #3a8df4;
  color: #fff;
`;

export const AppSuccessBtn = styled(DefaultButton)`
    color: #FFF;
    background-color: #5daf42;
    border: 1px solid #5daf42;
`;
export const LayoutContainer = styled.section`
  width: 920px;
  margin: 40px auto 0;
`;
