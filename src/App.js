import React, { useState, useEffect } from 'react';


const App = () => {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(0);

  useEffect(() => {
    console.log("Time is now " + timer)
    if (timer !== 0 && timerStatus === 1) {
      setTimeout(() => {
        let currentTime = timer;
        currentTime--;
        setTimer(currentTime)
      }, 1000)
    }
  })

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
      setTimer(timer - 1)
    } else if (currentStatus === 1) {
      setTimerStatus(0)
      setTimer(0)
    } else {
      console.log("timerState error " + currentStatus);
    }
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