import React, { Component } from "react";
import Style from "./NavBar.module.css";

class NavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    // console.log("Did Update: ", this.state.scrollPos);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });

    if (this.state.show === false) {
      console.log("NavBar Disappear!!!");
    } else if (this.state.show === true) {
      console.log("NavBar Reappear!!!");
    }
  };

  render() {
    const active = {
      zIndex: "1000",
      backgroundColor: "#61dafb",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "visible",
      transition: "all 200ms ease-in",
    };

    const hidden = {
      zIndex: "1000",
      backgroundColor: "#61dafb",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "hidden",
      transition: "all 200ms ease-out",
      transform: "translate(0, -100%)",
    };

    return (
      <>
        <div id="navbarWrapper" style={this.state.show ? active : hidden}>
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
