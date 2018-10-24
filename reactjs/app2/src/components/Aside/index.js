import React from "react";
import PropTypes from "prop-types";

import { Container, Repolist } from "./styles";

import api from "../../services/api";

export default class Aside extends React.Component {
  static propTypes = {
    handleSelectRepo: PropTypes.func.isRequired,
    handleRemoveRepo: PropTypes.func.isRequired
  };

  state = {
    asideSearch: "",
    asideList: [],
    asideLoader: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { asideList, asideSearch } = this.state;

    if (asideSearch === "") {
      return;
    }

    this.setState({ asideLoader: true });
    try {
      const response = await api.get(`/repos/${asideSearch}`);

      let { id, full_name } = response.data;
      let [name, owner] = full_name.split("/");
      let avatar_url = response.data.owner.avatar_url;

      if (asideList.find(repository => repository.id === response.data.id))
        return false;

      this.setState({
        // asideSearch: "",
        asideList: [...this.state.asideList, { id, name, owner, avatar_url }]
      });
    } catch (error) {
      // console.log(error);
    } finally {
      this.setState({
        asideLoader: false
      });
    }
  };

  handleRepositoryClick = repository => {
    const { handleSelectRepo } = this.props;

    handleSelectRepo(repository);
  };

  handleRemove = id => {
    const { handleRemoveRepo } = this.props;
    const { asideList } = this.state;
    this.setState({
      asideList: asideList.filter(item => item.id !== id)
    });

    handleRemoveRepo(id);
  };

  render() {
    const { asideList, asideSearch } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Usuário/Repositório"
            value={asideSearch}
            onChange={e => this.setState({ asideSearch: e.target.value })}
          />
          <button type="submit" title="Find and Add this repository">
            <i
              className={
                this.state.asideLoader
                  ? "fa fa-spinner fa-pulse fa-lg"
                  : "fa fa-plus-circle fa-lg"
              }
            />
          </button>
        </form>
        {asideList.map(repository => (
          <Repolist key={repository.id}>
            <button
              type="button"
              onClick={() => this.handleRepositoryClick(repository)}
            >
              <img
                src={repository.avatar_url}
                alt={repository.name + "/" + repository.owner}
              />
              <div>
                <strong>{repository.name}</strong>
                <span>{repository.owner}</span>
              </div>
            </button>
            <button
              title="Remove"
              type="button"
              onClick={() => this.handleRemove(repository.id)}
            >
              <div>
                <i className="fa fa-window-close fa-2x" />
              </div>
            </button>
          </Repolist>
        ))}
      </Container>
    );
  }
}
