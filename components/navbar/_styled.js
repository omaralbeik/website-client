import { Container, Collapse, NavLink, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';
import styled from 'styled-components';
import { sm, md } from 'styles/breakpoints';

export const _Navbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.inner_background};
  box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.highlighted};
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

export const _NavbarBrand = styled(NavbarBrand)`
  font-size: 140%;
  font-family: ${props => props.theme.fonts.title};
  font-weight: bolder;
  cursor: pointer;
  @media (${sm}) {
    font-size: 160%;
  }
`;

export const _NavItem = styled(NavItem)`
  padding: 5px 10px 0 10px;
  font-weight: lighter;
  text-transform: uppercase;
  @media (${sm}) {
    text-align: center;
    font-size: 120%;
    margin: 12px 0 0 0;
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.inner_background};
  }
  @media (${md}) {
    font-size: 110%;
    margin-top: 0;
  }
`;

export const _SwitchItem = styled(NavItem)`
  padding-top: 6px;
  background-color: ${props => props.theme.colors.inner_background};
  @media (${sm}) {
    text-align: center;
    margin: 20px 0 0 0;
    padding: 14px 26px 10px 6px;
  }
  @media (${md}) {
    margin: 0;
  }
`

export const _NavbarToggler = styled(NavbarToggler)`
  bolder: none;
  padding-right: 4px;
  padding-left: 4px;
  margin-top: -5px;
  background-color: ${props => props.theme.colors.inner_background} !important;
  color: ${props => props.theme.colors.primary};
  &:focus {
    background-color: ${props => props.theme.colors.inner_background} !important;
    outline: none;
  }
`;

export const _NavLink = styled(NavLink)`
  && {
    color: ${props => props.theme.colors.primary};
    &.active {
      color: ${props => props.theme.colors.selected};
      font-weight: bold;
    }
  }
`;

export const _Container = Container;
export const _Collapse = Collapse;
export const _Nav = Nav;
