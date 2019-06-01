// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Badge} from 'reactstrap';

// Styled Components
import styled, {withTheme} from "styled-components";

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired
  }

  render() {
    const {tags=[]} = this.props;
    return (
      <TagsContainer>
        {tags.map(t => <TagItem key={t.slug}>{t.name}</TagItem>)}
      </TagsContainer>
    );
  }

}

const TagItem = styled(Badge)`
  margin: 5px;
  padding: 8px 12px;
  user-select: none;
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
`;

const TagsContainer = styled.div`
  text-align: center;
`;

export default withTheme(Tags);
