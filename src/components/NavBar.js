// React
import React, {Component} from "react";

// Bootstrap
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

// Styled Components
import styled from 'styled-components';

// Components
import NavLink from '../components/NavLink';
import Separator from '../components/Separator';
import ThemeSwitch from '../components/ThemeSwitch';

// Links
import {navbarLinks} from '../links';


class Bar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        <StyledNavbar expand="md">
          <Brand href='/'>Omar Albeik</Brand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              {
                navbarLinks.map(l => (
                  <Item key={l.name}>
                    <NavLink activeClassName='active' exact to={l.url}>{l.name}</NavLink>
                  </Item>
                ))
              }
              <Item><ThemeSwitch/></Item>
            </Nav>
          </Collapse>
        </StyledNavbar>
        <Separator/>
      </Container>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  margin-top: 12px;
  padding-bottom: 0;
`;

const Brand = styled(NavbarBrand)`
  font-size: 140%;
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bolder;
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }

`;

const Item = styled(NavItem)`
  padding: 0 10px;
  font-weight: lighter;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    font-weight: bolder;
  }
  .active {
    font-weight: bold;
    color: ${props => props.theme.colors.selected};
  }
`

export default Bar;
