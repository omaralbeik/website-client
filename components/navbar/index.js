import React, { Component } from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { _Container, _Collapse, _Nav, _Navbar, _NavbarBrand, _NavItem, _SwitchItem, _NavLink, _NavbarToggler } from './_styled';
import ThemeSwitch from 'components/theme-switch';
import ActiveLink from 'components/active-link';
import { navbarLinks } from 'links';
import { genericStrings } from 'static/strings';

class Navbar extends Component {

  state = { isOpen: false };

  open = () => {
    this.setState({
      isOpen: true
    });
  }

  close = () => {
    this.setState({
      isOpen: false
    });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { menu } = this.props.theme.icons;

    return (
        <_Navbar expand="md" sticky="top">
          <_Container>
          <Link href='/'>
            <_NavbarBrand>{genericStrings.name}</_NavbarBrand>
          </Link>
          <_NavbarToggler onClick={this.toggle}>{menu}</_NavbarToggler>
          <_Collapse isOpen={this.state.isOpen} navbar>
            <_Nav navbar className="ml-auto">
              {navbarLinks.map(link => (
                <_NavItem key={link.name}>
                  <ActiveLink href={link.url}>
                    <_NavLink href={link.url} onClick={_ => {this.close()}}>{link.name}</_NavLink>
                  </ActiveLink>
                </_NavItem>
              ))}
            <_SwitchItem><ThemeSwitch/></_SwitchItem>
            </_Nav>
          </_Collapse>
          </_Container>
        </_Navbar>
    );
  }

}

export default withTheme(Navbar);
