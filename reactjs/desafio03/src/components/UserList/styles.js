import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: calc(90%);
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 99;
  left: 20px;
  top: 20px;
  overflow: auto;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    strong {
      font-size: 16px;
      color: #333;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #999;
    }
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      margin-right: 10px;
      border: none;
      background: none;
      color: #d03939;

      :hover {
        color: #8a2b2b;
        cursor: pointer;
      }
    }
  }
`;
