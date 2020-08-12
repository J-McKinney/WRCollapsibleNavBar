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
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {}

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
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
        <div id={Style.navbarWrapper} style={this.state.show ? active : hidden}>
          <div className={Style.navbar}>
            <a className={Style.ATags} href="#home">
              Home&nbsp;
            </a>
            <a className={Style.ATags} href="#news">
              News&nbsp;
            </a>
            <a className={Style.ATags} href="#contact">
              Contact&nbsp;
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
