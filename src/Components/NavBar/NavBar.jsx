import React, { Component } from "react";
import Style from "./NavBar.module.css";

class NavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    // console.log("Did Mount: ", this.state.scrollPos);
    window.addEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    // console.log("Did Update: ", this.state.scrollPos);
  }
  componentWillUnmount() {
    // console.log("Will Unmount: ", this.state.scrollPos);
    window.removeEventListener("scroll", this.onscroll);
  }

  onscroll = () => {
    // console.log("Scrolling: ", this.state.scrollPos);
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });

    // if (this.state.scrollPos < -50) {
    //   console.log("Disappear!!!");
    // } else {
    //   console.log(this.state.show)
    // }

    // if (this.state.show === false) {
    //   console.log("Disappear!!!");
    // } else if (this.state.show === true) {
    //   console.log("Reappear!!!");
    // }

  };

  render() {
    return (
      <>
        <div className="navbarWrapper">
          <div className={Style.navbar}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
