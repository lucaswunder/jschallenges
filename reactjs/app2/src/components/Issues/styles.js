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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 30px;
  li {
    display: flex;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 15px;
      max-width: 100%;
      strong {
        color: #333;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 400px;
      }
      span {
        color: #666;
        font-size: 14px;
      }
      a {
        margin-top: 5px;
        background: #b286d1;
        padding: 5px 10px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
`;
