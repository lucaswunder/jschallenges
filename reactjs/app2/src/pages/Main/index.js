import React from "react";

//import { Container } from "./styles";
import Aside from "../../components/Aside";
import Issues from "../../components/Issues";

export default class Main extends React.Component {
  state = {
    SelectedRepo: null
  };

  handleSelectRepo = repository => {
    this.setState({ SelectedRepo: repository });
  };

  handleRemoveRepo = id => {
    if (this.state.SelectedRepo.id === id) {
      this.setState({ SelectedRepo: null });
    }
  };

  render() {
    const { SelectedRepo } = this.state;
    return (
      <div className="main">
        <Aside
          handleSelectRepo={this.handleSelectRepo}
          handleRemoveRepo={this.handleRemoveRepo}
        />
        {SelectedRepo && <Issues repository={SelectedRepo} />}
      </div>
    );
  }
}
