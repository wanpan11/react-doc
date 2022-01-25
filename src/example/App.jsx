import React from "react";

class Item2 extends React.Component {
  state = {
    index: 1,
  };

  componentDidMount() {
    console.log("Item2 did mount =================");

    console.log("Item2 setState 同步");
    this.setState({ index: 2 });
  }

  render() {
    console.log("Item2 render");
    return <div>Item2 同步 --- 初始值:1 当前值:{this.state.index}</div>;
  }
}

class Item1 extends React.Component {
  state = {
    index: 1,
  };

  componentDidMount() {
    console.log("Item1 did mount ===========");

    setTimeout(() => {
      console.log("Item1 SetState调用setState 异步");

      this.setState({
        index: this.state.index + 10,
      });
    }, 0);
  }

  render() {
    console.log("Item1 render");
    return <div>Item1 异步 --- 初始值:0 当前值:{this.state.index}</div>;
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

  componentDidUpdate() {
    console.log("AppClass componentDidUpdate");
  }

  render() {
    console.log("AppClass render");
    return (
      <div>
        <Item1 />
        <Item2 />
      </div>
    );
  }
}

export default AppClass;
