import React from "react";
import "./api.css";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      result: null
    };
  }

  getHouse = () => {
    const url = "https://www.potterapi.com/v1/sortingHat";
    const key = "$2a$10$carHx7aHupj5gz7i/zSrP.CZtHxznz3FQfcgNNA78KkEaOj8gNUmC";
    fetch(url, { key: key })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            result: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    const { error, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="Body">
          <h1>What house do you belong to?</h1>
          {result ? (
            <h3>{result}</h3>
          ) : (
            <h3>Click the hat to reveal what house you belong to!</h3>
          )}
          <img
            onClick={this.getHouse}
            className="Sortinghat"
            src="https://img.pngio.com/sorting-hat-png-4-png-image-sorting-hat-png-901_685.png"
            alt="Sorting hat png 4 » PNG Image"
          />
        </div>
      );
    }
  }
}

export default Api;
