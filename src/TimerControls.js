import React from 'react';


class TimerControls extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.add} disabled={this.props.timerStatus} >+</button>
                <button onClick={this.props.remove} disabled={this.props.timerStatus}>-</button>
            </div >
        )
    }
}

export default TimerControls;