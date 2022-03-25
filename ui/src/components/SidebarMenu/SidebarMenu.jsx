import { Component } from "react";
import { createPortal } from "react-dom";
import "./SidebarMenu.css";

class SidebarMenu extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <button className="openbtn" onClick={this.toggle}>
          {open ? <small>✕</small> : <>☰</>}
        </button>
        <div className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}>
          <a href="#">Bio</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </>
    );
  }
}

export { SidebarMenu };
