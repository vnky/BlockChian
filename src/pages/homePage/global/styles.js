import styled from "styled-components";

export const HomePageContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: 600px;
`;

export const BlockListContainer = styled.section`
  ul {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 1 calc(100% - 90%);
      list-style: none;
      text-align: center;
      padding: 20px;
      background-color: #0a3969;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      // display: inline-block;
      margin-right: 20px;
      margin-bottom: 20px;
      box-shadow:  1px 6px 24px #000;
      a {
        text-decoration: none;
        color:#FFF;
      }
      &:hover {
       
        position: relative;
        top: -6px;
      }
    }
  }
`;

export const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  button {
    margin-right: 20px;
    padding: 20px;
    border-radius: 10px;
    &:last-child {
      margin-right: 0;
    }
  }

`;
