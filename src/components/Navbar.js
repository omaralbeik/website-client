// React
import React, {Component} from 'react';

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
import styled, {withTheme} from 'styled-components';
import {sm, md} from '../breakpoints';

// Components
import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';

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

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {menu} = this.props.theme.icons;

    return (
      <Wrapper>
        <Container>
          <StyledNavbar expand="md">
            <Brand href='/'>Omar Albeik</Brand>
            <Toggler onClick={this.toggle}>
              <img src={menu} alt='Menu' />
            </Toggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="ml-auto">
                {
                  navbarLinks.map(l => (
                    <Item key={l.name}>
                      <NavLink activeClassName='active' exact to={l.url} onClick={_ => {this.close()}}>{l.name}</NavLink>
                    </Item>
                  ))
                }
                <SwitchItem><ThemeSwitch/></SwitchItem>
              </Nav>
            </Collapse>
          </StyledNavbar>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.inner_background};
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  margin-bottom: 30px;
`;

const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.inner_background};
  padding-top: 12px;
  padding-bottom: 12px;
  @media (${sm}) {
    padding-left: 0;
    padding-right: 0;
  }
  button {
    background-color: ${props => props.theme.colors.background};
    &:focus {
      background-color: ${props => props.theme.colors.background};
    }
    &:hover {
      background-color: ${props => props.theme.colors.background};
    }
  }
`;

const Brand = styled(NavbarBrand)`
  font-size: 140%;
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bolder;
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }
  @media (${sm}) {
    font-size: 160%;
  }
`;

const Item = styled(NavItem)`
  padding: 8px 10px 0 10px;
  font-weight: lighter;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.primary};
  }
  .active {
    font-weight: bold;
    color: ${props => props.theme.colors.selected};
  }
  @media (${sm}) {
    text-align: center;
    font-size: 120%;
    margin: 12px 0 0 0;
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.inner_background};
  }
  @media (${md}) {
    font-size: 85%;
    margin-top: 0;
  }
`

const SwitchItem = styled(Item)`
  padding-top: 2px;
  background-color: ${props => props.theme.colors.inner_background};
  @media (${sm}) {
    margin: 12px 0 0 0;
    padding: 4px 26px 10px 6px;
  }
  @media (${md}) {
    margin: 0;
  }
`

const Toggler = styled(NavbarToggler)`
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${props => props.theme.colors.inner_background} !important;
  &:focus {
    background-color: ${props => props.theme.colors.inner_background};
    outline: none;
  }
`

export default withTheme(Bar);
