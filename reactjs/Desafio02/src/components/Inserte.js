import React from 'react';

class Inserte extends React.Component {
  state = {
    newName: '',
  };

  setNewName = (e) => {
    this.setState({ newName: e.target.value });
  };

  handleInsert = () => {
    if (this.state.newName === '') return;
    this.setState({ newName: '' });
    this.props.insertItem(this.state.newName);
  };

  keyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleInsert();
    }
  };

  render() {
    return (
      <div>
        Insert new Item{' '}
        <input
          onKeyPress={this.keyPress}
          onChange={this.setNewName}
          type="text"
          value={this.state.newName}
        />
        <button onClick={this.handleInsert}>Inserir</button>
      </div>
    );
  }
}

export default Inserte;
