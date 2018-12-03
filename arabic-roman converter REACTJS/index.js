import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    var arabicNumber = document.getElementById("arabic-number");
    let answer;
    switch (parseInt(arabicNumber.value, 10)) {
      case 1:
        answer = "I";
        break;
      case 2:
        answer = "II";
        break;
      case 3:
        answer = "III";
        break;
      case 4:
        answer = "IV";
        break;
      case 5:
        answer = "V";
        break;
      case 6:
        answer = "VI";
        break;
      case 7:
        answer = "VII";
        break;
      case 8:
        answer = "VIII";
        break;
      case 9:
        answer = "IX";
        break;
      case 10:
        answer = "X";
        break;
      default:
        answer = "Error! Enter a number less than 10";
    }
    this.setState({
      value: answer
    });
  }
  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>Converter form</legend>
          <form>
            <label>
              Enter a number:
              <input
                type="text"
                name="name"
                placeholder="type here"
                id="arabic-number"
              />
            </label>
            <button id="convert-button" onClick={this.handleClick}>
              Convert
            </button>
            <br />
            <br />
          </form>
          <div id="roman-number">{this.state.value}</div>
        </fieldset>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
