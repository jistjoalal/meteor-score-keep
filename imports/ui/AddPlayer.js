import React, { Component } from 'react';

import Players from '../api/players';

class AddPlayer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name) {
      Players.insert({
        name,
        score: 0,
      });
      e.target.name.value = '';
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="text" name="name" placeholder="Name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;