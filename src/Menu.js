import React from "react";

class Menu extends React.Component {
  contextTypes: {
    name: React.PropTypes.object
  };

  render() {
    return <div>My name is {this.context.name.id}</div>;
  }
}

export default Menu;
