import React, { Component } from 'react';

class CounterCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: props.age
    };
  }

  handleClick = () => {
    this.setState({
      currentAge: this.state.currentAge + 1 
    });
    console.log(+1);
  }

  render() {
    const {
      firstName,
      lastName,
      hairColor
    } = this.props;
    
    return (
      <div>
        <h5> This is done using Class Component! </h5>
        <h2> { firstName } { lastName} </h2>
        <p> Age: { this.state.currentAge } </p>
        <p> Hair Color: { hairColor } </p>
        <button onClick = { this.handleClick }> Birthday button for { firstName } { lastName } </button>
      </div>
    );
  }
};

export default CounterCC;