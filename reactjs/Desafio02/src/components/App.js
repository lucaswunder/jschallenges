import React from 'react';

import Lista from './Lista';
import Insert from './Inserte';

class App extends React.Component {
  state = {
    title: 'App',
    list: [{ id: 0, name: 'Lucas 00' }, { id: 1, name: 'Vitória 01' }],
  };

  setTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  setItem = (_name) => {
    // const { list } = this.state;
    const newItem = { id: Math.random(), name: _name };
    this.setState(prevState => ({ list: [...prevState.list, newItem] }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        Change App Title <input onChange={this.setTitle} type="text" value={this.state.title} />
        <br />
        <Insert insertItem={this.setItem} />
        <Lista list={this.state.list} />
      </div>
    );
  }
}

export default App;
