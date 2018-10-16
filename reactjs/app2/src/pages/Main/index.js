import React from "react";

//import { Container } from "./styles";
import Repositories from "../../components/Repositories";
import Issues from "../../components/Issues";

const Main = () => {
  return (
    <div className="main">
      <Repositories />
      <Issues />
    </div>
  );
};

export default Main;
