import React from "react";

import { Container, TopHeader, List } from "./styles";

const Header = () => {
  return (
    <Container>
      <TopHeader>
        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="facebook/react"
          />
          <div>
            <strong>react</strong>
            <span>facebook</span>
          </div>
        </div>
        <select>
          <option value="all">Todas</option>
          <option value="open">Abertas</option>
          <option value="closed">Fechadas</option>
        </select>
      </TopHeader>
      <List />
    </Container>
  );
};

export default Header;
