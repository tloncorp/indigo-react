import React from 'react'

class Loading extends React.Component {
  state = { flipVal: false };

  componentDidMount() {
    this.flipTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.flipTimer);
  }

  tick() {
    this.setState(prevState => ({
      flipVal: !prevState.flipVal
    }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.flipVal ? `\u2592` : `\u2593`}
      </React.Fragment>
    );
  }
}

export default Loading;
