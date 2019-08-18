import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTheme } from 'redux/actions';
import { withTheme } from 'styled-components';
import { _Switch } from './_styled';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';
import { getTheme, generateInfo } from 'styles/themes';
import LightIcon from 'static/icons/icon-light-mode.svg';
import DarkIcon from 'static/icons/icon-dark-mode.svg';
class ThemeSwitch extends Component {

  loadTheme(theme) {
    this.props.loadTheme(theme);
  }

  handleChange = checked => {
    const info = generateInfo(checked ? dark : light);
    this.loadTheme(info)
  }

  render() {
    const info = this.props.theme;
    const theme = getTheme(info);
    const { selected } = theme.colors;
    const checked = info.style === 'dark';

    return (
      <_Switch
          onChange={this.handleChange}
          checked={checked}
          width={80}
          height={34}
          onColor={selected}
          activeBoxShadow={'0 0 1px 1px' + selected}
          uncheckedIcon={<LightIcon />}
          checkedIcon={<DarkIcon />}
          aria-label='Theme Switch'
          aria-checked={checked ? 'true' : 'false'}
      />
    );
  }

}

function mapStateToProps(theme) {
  return theme;
}

function mapDispatchToProps(dispatch) {
  return {
    loadTheme: theme => dispatch(loadTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ThemeSwitch));
