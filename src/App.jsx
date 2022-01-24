import React from "react";

class Item2 extends React.Component {
  state = {
    index: 1,
  };

  componentDidMount() {
    console.log("Item2 did mount =================");

    debugger;
    console.log("Item2 setState");
    this.setState({ index: 2 });
    console.log(this.state.index);
  }

  componentWillUpdate() {
    console.log("Item2 componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Item2 componentDidUpdate");
  }

  render() {
    console.log("Item2 render");
    return <div>Item1 --- 初始值:1 当前值:{this.state.index}</div>;
  }
}

class Item1 extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    console.log("Item1 did mount ===========");

    setTimeout(() => {
      console.log("Item1 SetState调用setState");

      this.setState({
        index: this.state.index + 1,
      });
      console.log("state", this.state.index);
    }, 0);
  }

  componentWillUpdate() {
    console.log("Item1 componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Item1 componentDidUpdate");
  }

  render() {
    console.log("Item1 render");
    return <div>Item1 --- 初始值:0 当前值:{this.state.index}</div>;
  }
}

class AppClass extends React.Component {
  state = {
    a: 1,
    b: 0,
  };

  componentDidMount() {
    console.log("AppClass did mount ==================");
  }

  componentWillUpdate() {
    console.log("AppClass componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("AppClass componentDidUpdate");
  }

  render() {
    console.log("AppClass render");
    return (
      <div>
        {/* <Item1 /> */}
        <Item2 />
      </div>
    );
  }
}

export default AppClass;
