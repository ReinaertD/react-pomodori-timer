import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <p>{("0" + (Math.floor(this.props.time / 60))).slice(-2)}:{("0" + (Math.floor(this.props.time % 60))).slice(-2)}</p>
        )
    }
}


export default Timer;