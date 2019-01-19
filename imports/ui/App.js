import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
  render() {
    const { title, players } = this.props;
    return (
      <div>
        <TitleBar title={title} subtitle="Created by Jist" />
        <div className="wrapper">
          <PlayerList players={players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
}

export default App;