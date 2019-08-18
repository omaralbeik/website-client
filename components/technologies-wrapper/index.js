import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _div, _Badge } from './_styled';

class TechnologiesWrapper extends Component {

  static propTypes = {
    technologies: PropTypes.array.isRequired
  }

  render() {
    const {technologies=[]} = this.props;
    return (
      <_div>
        {technologies.map(t => <_Badge key={t.slug}>{t.name}</_Badge>)}
      </_div>
    );
  }

}

export default TechnologiesWrapper;
