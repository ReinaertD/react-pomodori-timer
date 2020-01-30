import React from 'react';



class TimerStatus extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.timerStarted}> {!this.props.timerStatus ? "Start" : "Reset"}</button>
            </div>
        )
    }
}


export default TimerStatus;