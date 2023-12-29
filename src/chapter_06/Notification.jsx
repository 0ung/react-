import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() is called`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() is called`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() is called`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {this.props.message},{this.props.id}
        </span>
      </div>
    );
  }
}

export default Notification;
