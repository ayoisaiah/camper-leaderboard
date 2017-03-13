import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';

import './stylesheet/css/main.css';

class CamperLeaderboard extends React.Component {

  constructor() {
    super();

    this.state = {
      campers: [],
      recent: undefined,
      alltime: undefined,
      current: ""
    }

    this.getCampers = this.getCampers.bind(this);
  }

  componentDidMount() {
    this.getCampers('recent');
  }

  getCampers(time) {

    if (time === 'recent' && this.state.recent !== undefined) {

      this.setState({
        campers: this.state.recent,
        current: time
      });

      return;
    }

    if (time === 'alltime' && this.state.alltime !== undefined) {

      this.setState({
        campers: this.state.alltime,
        current: time
      });

      return;
    }

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/' + time).then(response => response.json() ).then(data => {

      const campers = data;

      this.setState({
        campers: campers,
        recent: (time === 'recent') ? campers : this.state.recent,
        alltime: (time === 'alltime') ? campers : this.state.alltime,
        current: time
      });

    });

  }

  render () {

    return (

      <div>

        <h1>freeCodeCamp Leaderboard</h1>

        <Table
          campers={this.state.campers}
          getCampers={this.getCampers}
          current={this.state.current}
        />

        <span className="credit">Developed by <a href="https://freshman.tech">Ayo Isaiah</a>. View on <a href="https://github.com/ayoisaiah/camper-leaderboard">Github</a></span>

      </div>

    );
  }

}

ReactDOM.render(
  <CamperLeaderboard />,
  document.getElementById('app')
);
