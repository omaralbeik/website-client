// React
import React, {Component} from "react";

// Styled Components
import styled, {withTheme} from 'styled-components';

// Bootstrap
import Switch from "react-switch";

// Media
import lightIcon from '../images/icon-light-mode.svg';
import darkIcon from '../images/icon-dark-mode.svg';

class ThemeSwitch extends Component {

  constructor() {
    super();
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log(checked);
    this.setState({ checked });
  }

  render() {
    const {selected} = this.props.theme.colors;
    return (
      <StyledSwitch
          onChange={this.handleChange}
          checked={this.state.checked}
          width={80}
          height={34}
          onColor={selected}
          activeBoxShadow={'0 0 1px 1px' + selected}
          uncheckedIcon={<img src={lightIcon} alt='Light Mode'/>}
          checkedIcon={<img src={darkIcon} alt='Dark Mode'/>}
      />
    );
  }

}

const StyledSwitch = styled(Switch)`
  margin-top: -5px;
  margin-left: 12px;
  margin-right: -10px;
`;

export default withTheme(ThemeSwitch);
