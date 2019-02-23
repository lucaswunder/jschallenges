import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Form } from "./styles";

import UserActions from "../../store/ducks/user";

class NewUserModal extends Component {
  state = {
    userInput: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userInput } = this.state;
    const { getUserRequest } = this.props;

    getUserRequest(userInput);
  };

  render() {
    const { userInput } = this.state;
    const { closeUserModal, failure } = this.props;
    console.log(failure);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            placeholder="Novo usuário"
            name="userInput"
            value={userInput}
            onChange={this.handleInputChange}
          />
          {!!failure && <p>{failure}</p>}
          <div>
            <button onClick={() => closeUserModal()} type="button">
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  failure: state.user.failure
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserModal);
