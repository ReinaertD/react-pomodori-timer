import React, { useState } from 'react';


const App = () => {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(0);

  function addMinute() {
    const currentTime = timer;
    if (currentTime + 60 <= 1200) {
      setTimer(currentTime + 60);
    }
  }

  function removeMinute() {
    const currentTime = timer;
    if (currentTime - 60 >= 0) {
      setTimer(currentTime - 60);
    }
  }

  function timerState() {
    const currentStatus = timerStatus;
    if (currentStatus === 0) {
      setTimerStatus(1)
      countDown()
    } else if (currentStatus === 1) {
      setTimerStatus(0)
    } else {
      console.log("timerState error " + currentStatus);
    }
  }

  function countDown() {
    let currentTime = timer;
    setInterval(() => {
      console.log("tick")
      currentTime -= 1
      setTimer(currentTime);
      // if (currentTime === 0) {
      //   clearInterval(countdown)
      // }
    }, 1000)
  }

  return (
    <div className="pomodorotimer code">
      <div className="timer">{timer}</div>
      <div className="controls">
        <button disabled={timerStatus} onClick={addMinute}>Add</button>
        <button disabled={timerStatus} onClick={removeMinute}>Remove</button>
        <button onClick={timerState}>{(timerStatus) ? "Reset" : "Start"}</button>
      </div>
    </div>
  );
}




export default App;