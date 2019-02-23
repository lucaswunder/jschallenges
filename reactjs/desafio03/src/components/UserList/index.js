import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Container, User } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UsersActions from "../../store/ducks/user";

class UserList extends Component {
  render() {
    const { data } = this.props.user;
    const { removeUser } = this.props;
    return (
      <Container>
        {data.map(user => (
          <User key={user.id}>
            <img alt="Avatar" src={user.avatar_url} />
            <div>
              <strong>{user.name}</strong>
              <span>{user.login}</span>
            </div>
            <div>
              <button onClick={() => removeUser(user.id)}>
                <i className="fas fa-times-circle fa-2x red" />
              </button>
              <i className="fas fa-angle-right fa-2x" />
            </div>
          </User>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
