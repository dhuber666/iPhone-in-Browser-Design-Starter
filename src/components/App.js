import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div style={[styles.iphoneFrame, this.props.color || null]}>
        <div style={styles.iphone}>
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

const iPhoneWidth = 350;
const iPhoneHeight = 720;

const styles = {
  iphone: {
    width: iPhoneWidth,
    height: iPhoneHeight,
    border: "2px solid #ccc",
    borderRadius: "10px",
    margin: "100px auto",
    background: "#FFC700"
  },
  iphoneFrame: {
    width: iPhoneWidth + 8,
    height: iPhoneHeight + 8,
    border: "2px solid #ccc",
    borderRadius: "10px",
    margin: "100px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 2px #ccc"
  }
};

export default App;
