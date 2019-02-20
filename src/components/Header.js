import React from "react";

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.provider}>
        <span>A1</span>
      </div>
      <div style={styles.speaker} />
      <div style={styles.rightMenu}>
        <span stlye={{ fontSize: 12 }}>LTE</span>
        <span style={styles.battery}>
          <img
            src={require("../assets/Battery.svg")}
            alt="Battery Icon"
            style={{ height: 8 }}
          />
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    color: "#4C4545"
  },
  provider: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600"
  },
  rightMenu: {
    marginRight: 5,
    fontSize: 12,
    fontWeight: "600"
  },
  battery: {
    marginLeft: 10,
    marginRight: 20,
    height: 2
  },
  speaker: {
    width: 40,
    height: 4,
    backgroundColor: "#4C4545",
    alignSelf: "center",
    borderRadius: 30
  }
};

export default Header;
