import React, { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 5,
  //   };
  // }

  static propTypes = {
    //
  };

  state = {
    value: 6,
    forSum: this.props.initialValue,
  };

  handleIncrement = event => {
    // console.log('click +1');
    // console.log(this);
    // console.log(event);
    // console.log(event.target);
    // console.log(event.type);
    const target = event.target;
    // const { target } = event;

    setTimeout(() => {
      this.setState(prevState => ({
        value: prevState.value + 1,
      }));
      console.log(target);
    }, 1000);
  };

  // handleDecrement = () => {
  //   this.setState({
  //     value: 123,
  //   });
  // };

  handleDecrement = () => {
    // this.setState(prevState => {
    //   return {
    //     value: prevState.value - 1,
    //   };
    // });
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  handleSum = () => {
    this.setState(prevState => ({
      forSum: prevState.forSum + 3,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <span className="CounterSum__value">
          {' '}
          динамическая переменная {this.state.forSum}
        </span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleSum}>
            Вернуть сумму динамич + 3
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button
            type="button"
            // onClick={() => {
            //   console.log('click -1');
            //   console.log(this);
            // }}
            onClick={this.handleDecrement}
          >
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
