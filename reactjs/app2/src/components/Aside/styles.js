import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  form {
    display: flex;
    padding: 0 0 20px;
    border-bottom: 1px solid #eee;

    input {
      flex: 1;
      background: #eee;
      border-radius: 4px;
      padding: 0 15px;
      height: 36px;
      border: 0;
      font-size: 14px;
      outline: none;
    }

    button {
      outline: none;
      height: 36px;
      padding: 0 15px;
      font-size: 20px;
      color: #fff;
      background: #59ea9a;
      border: 0;
      border-radius: 4px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

export const Repolist = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  opacity: 1;
  background: transparent;
  border: 0;

  :hover {
    background: #fafafa;
  }

  button:nth-child(2) > div > i {
    color: #e44b4b;
  }

  button {
    display: flex;
    align-items: center;
    margin-top: 15px;
    opacity: 1;
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: none;

    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
    }

    div {
      flex-direction: column;
      margin-left: 10px;
      text-align: left;
      display: flex;

      strong {
        color: #333;
        font-size: 16px;
      }

      span {
        color: #666;
        font-size: 14px;
      }
    }
  }
`;
