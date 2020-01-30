import React from 'react';
import Timer from './Timer';
import TimerControls from './TimerControls';
import TimerStatus from './TimerStatus';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStatus: false,
      time: 22
    }
    this.timerStarted = this.timerStarted.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.removeMinute = this.removeMinute.bind(this);
    this.timerStarted = this.timerStarted.bind(this);
  }

  addMinute() {
    console.log(this.state.time)
    if (this.state.time + 60 <= 1200) {
      this.setState({
        time: this.state.time + 60
      });
    } else if (this.state.time + 60 > 1200) {
      this.setState({
        time: 1200
      });
    }
  }

  removeMinute() {
    console.log(this.state.time)
    if (this.state.time >= 60) {
      this.setState({
        time: this.state.time - 60
      });
    } else if (this.state.time < 60) {
      this.setState({
        time: this.state.time - this.state.time
      });
    }
  }

  timerStarted() {
    console.log(this.state.timerStatus)
    this.setState({
      timerStatus: !this.state.timerStatus
    });
    if (!this.state.timerStatus) {
      this.timer = setInterval(() => {
        if (this.state.time !== 0) {
          this.setState({
            time: this.state.time - 1
          });
        } else if (this.state.time === 0) {
          this.setState({
            timerStatus: false
          })
          clearInterval(this.timer)
        }
      }, 1000)
    }

  }

  countdown() {

  }

  render() {
    return (
      <div>
        <Timer time={this.state.time} />
        <TimerControls timerStatus={this.state.timerStatus} add={this.addMinute} remove={this.removeMinute} />
        <TimerStatus timerStarted={this.timerStarted} timerStatus={this.state.timerStatus} />
      </div>
    );
  }
}

export default App;