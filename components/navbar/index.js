import React, { Component } from "react";
import Link from "next/link";
import { withTheme } from "styled-components";
import ThemeSwitch from "components/theme-switch";
import ActiveLink from "components/active-link";
import { navbarLinks } from "links";
import { genericStrings } from "public/static/strings";
import {
  _Container,
  _Collapse,
  _Nav,
  _Navbar,
  _NavbarBrand,
  _NavItem,
  _SwitchItem,
  _NavLink,
  _NavbarToggler,
} from "./_styled";

class Navbar extends Component {
  state = { isOpen: false };

  open = () => {
    this.setState({
      isOpen: true,
    });
  }

  close = () => {
    this.setState({
      isOpen: false,
    });
  }

  toggle = () => {
    this.setState((oldState) => ({
      isOpen: !oldState.isOpen,
    }));
  }

  render() {
    const { theme } = this.props;
    const { icons } = theme;
    const { menu } = icons;
    const { isOpen } = this.state;
    return (
      <_Navbar expand="md" sticky="top">
        <_Container>
          <Link href="/">
            <span>
              <_NavbarBrand>{genericStrings.name}</_NavbarBrand>
            </span>
          </Link>
          <_NavbarToggler onClick={this.toggle}>{menu}</_NavbarToggler>
          <_Collapse isOpen={isOpen} navbar>
            <_Nav navbar className="ml-auto">
              {navbarLinks.map((link) => (
                <_NavItem key={link.name}>
                  <ActiveLink href={link.url}>
                    <_NavLink href={link.url} onClick={() => { this.close(); }}>{link.name}</_NavLink>
                  </ActiveLink>
                </_NavItem>
              ))}
              <_SwitchItem><ThemeSwitch /></_SwitchItem>
            </_Nav>
          </_Collapse>
        </_Container>
      </_Navbar>
    );
  }
}

export default withTheme(Navbar);
