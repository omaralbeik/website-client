import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { _a, _div } from './_styled';
import social from 'links/social';

class SocialLinks extends Component {

  render() {
    const { theme } = this.props;

    return (
      <_div>
        {social(theme).map(l => (
          <_a key={l.name} href={l.url} target='_blank' rel='noopener noreferrer'>
            {l.icon}
          </_a>
        ))}
      </_div>
    );
  }

}

export default withTheme(SocialLinks);
