import React, { Component } from "react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

export default class LifeCycleCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 1000,
    };
    console.log("--------CONSTRUCTOR--------");
  }

  componentDidMount() {
    console.log("--------COMPONENTDIDMOUNT--------");
  }

  componentDidUpdate(oldProps, oldState) {
    console.log(this.state.count - oldState?.counts);
    console.log("--------COMPONENTDIDUPDATE--------");
    if (this.state.count - oldState?.count === 5) {
      toast.info("Count is incremented by 5");
    } else if (this.state.count === oldState?.count) {
      toast.error("data are same ");
    }
  }

  render() {
    console.log("--------RENDER--------");
    return (
      <div className="w-50 d-flex flex-column gap-2">
        <h1>count is {this.state.count}</h1>
        <Button
          color="danger"
          className="w-50"
          onClick={() => this.setState({ count: this.state?.count + 1 })}
        >
          Inc{" "}
        </Button>
        <Button
          color="danger"
          className="w-50"
          onClick={() => this.setState({ count: this.state?.count + 5 })}
        >
          Inc-5{" "}
        </Button>
        <Button
          color="danger"
          className="w-50"
          onClick={() => this.setState({ count: this.state?.count })}
        >
          SAME INC
        </Button>
      </div>
    );
  }
}
