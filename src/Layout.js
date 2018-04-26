import React from "react";
import Menu from "./Menu";

class Layout extends React.Component {
  getChildContext() {
    return {
      name: {
        id: "223",
        value: "Jack"
      }
    };
  }
  render() {
    return <Menu />;
  }
}

export default Layout;
