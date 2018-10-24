import React from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

import { Container, TopHeader, List } from "./styles";

export default class Header extends React.Component {
  static propTypes = {
    repository: PropTypes.shape({
      avatar_url: PropTypes.string,
      id: PropTypes.int,
      name: PropTypes.string,
      owner: PropTypes.string
    }).isRequired
  };

  Filters = [
    { value: "all", label: "Todas" },
    { value: "open", label: "Abertas" },
    { value: "closed", label: "Fechadas" }
  ];

  state = {
    issues: [],
    activeFilter: "open",
    loader: false
  };

  componentDidMount() {
    this.loadIssues();
  }

  componentDidUpdate(props) {
    const { repository } = this.props;

    if (props.repository.id !== repository.id) {
      this.loadIssues();
    }
  }

  loadIssues = async () => {
    this.setState({ issues: [] });
    this.setState({ loader: true });
    const { repository } = this.props;
    const { activeFilter } = this.state;

    const response = await api.get(
      `repos/${repository.name + "/" + repository.owner}/issues`,
      {
        params: { state: activeFilter }
      }
    );

    this.setState({ issues: response.data });
    this.setState({ loader: false });
  };

  handleFilterChange = e => {
    this.setState({ activeFilter: e.target.value }, this.loadIssues);
  };

  render() {
    const { repository } = this.props;
    const { issues, activeFilter } = this.state;
    return (
      <Container>
        <TopHeader>
          <div>
            <img
              src={repository.avatar_url}
              alt={repository.name + "/" + repository.owner}
            />
            <div>
              <strong>{repository.name}</strong>
              <span>{repository.owner}</span>
            </div>
          </div>
          <div>
            <i
              className={
                this.state.loader ? "fa fa-spinner fa-pulse fa-3x" : ""
              }
            />
          </div>
          <select value={activeFilter} onChange={this.handleFilterChange}>
            {this.Filters.map(filter => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </TopHeader>
        <List>
          {issues.map(issue => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>{issue.title.substring(0, 12)} ...</strong>
                <span>{issue.user.login}</span>
                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-external-link" />
                  Abrir issue
                </a>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
