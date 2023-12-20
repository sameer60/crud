import React from "react";

class OfferClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>Count : {count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default OfferClass;
