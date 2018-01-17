import React, { Component } from "react";

class ExpressionComponent extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    const user = {
      firstName: "Harper",
      lastName: "Perez"
    };

    return (
      <div>
        <h1>Hello {this.formatName(user)}!</h1>
      </div>
    );
  }
}

export default ExpressionComponent;
