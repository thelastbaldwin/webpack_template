import React from "react";

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = { time: 0};
    }

    componentDidMount(){
        this.interval = setInterval(() => {this.tick();}, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick(){
        let currentTime = this.state.time;

        this.setState({
            time: ++currentTime
        });
    }

    render(){
        return(
            <div>
                {`Current count is: ${this.state.time}`}
            </div>
        );
    }
}

export default Timer;