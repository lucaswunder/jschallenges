import React from "react";

import { Container, Repolist } from "./styles";

const Aside = () => {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Usuário/Repo" />
        <button type="submit">
          <i className="fa fa-plus-circle" />
        </button>
      </form>
      <Repolist>
        <button type="button">
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="facebook/react"
          />
          <div>
            <strong>react</strong>
            <span>facebook</span>
          </div>
        </button>
      </Repolist>

      <Repolist>
        <button type="button">
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="facebook/react"
          />
          <div>
            <strong>react</strong>
            <span>facebook</span>
          </div>
        </button>
      </Repolist>
      <Repolist>
        <button type="button">
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="facebook/react"
          />
          <div>
            <strong>react</strong>
            <span>facebook</span>
          </div>
        </button>
      </Repolist>
    </Container>
  );
};

export default Aside;
