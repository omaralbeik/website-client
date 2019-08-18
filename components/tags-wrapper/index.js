
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { _div, _Badge } from './_styled';

class TagsWrapper extends Component {

  static propTypes = {
    tags: PropTypes.array.isRequired
  }

  render() {
    const { tags=[] } = this.props;
    return (
      <_div>
        {tags.map(t => <_Badge key={t.slug}>{t.name}</_Badge>)}
      </_div>
    );
  }

}

export default TagsWrapper;
