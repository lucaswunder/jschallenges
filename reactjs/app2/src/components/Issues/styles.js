import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  height: 100%;
`;

export const TopHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  height: 100px;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;

    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
    }
    div {
      display: flex;
      align-items: center;
      margin-left: 10px;
      flex-direction: column;
      align-items: baseline;
    }
  }

  select {
    height: 42px;
    border: 1px solid #ddd;
    padding: 0 15px;
    width: 150px;
    font-size: 14px;
  }
`;

export const List = styled.ul``;
