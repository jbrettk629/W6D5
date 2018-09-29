import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  render() {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();


    return (
      <div className="date-time">
        <p>
          <span>
            Time:
          </span>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        </p>
        <p>
          <span>
            Date:
          </span>
          <span>
            {this.state.time.toDateString()}
          </span>
        </p>
      </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
}
