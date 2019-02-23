import React from "react";
import { connect } from "react-redux";

import Mapbox from "../../components/Mapbox";
import UserList from "../../components/UserList";
import UserAddModal from "../../components/UserAddModal";

import { Container } from "./styles";

const Main = ({ modal }) => (
  <Container>
    <Mapbox />
    <UserList />
    {modal && <UserAddModal />}
  </Container>
);

const mapStateToProps = state => ({
  modal: state.user.userModalOpen
});

export default connect(mapStateToProps)(Main);
