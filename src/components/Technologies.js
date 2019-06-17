// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import {Badge} from 'reactstrap';

// Styled Components
import styled, {withTheme} from 'styled-components';

class Technologies extends Component {
  static propTypes = {
    technologies: PropTypes.array.isRequired
  }

  render() {
    const {technologies=[]} = this.props;
    return (
      <TechnologiesContainer>
        {technologies.map(t => <TagItem key={t.slug}>{t.name}</TagItem>)}
      </TechnologiesContainer>
    );
  }

}

const TagItem = styled(Badge)`
  margin: 3px 6px 3px 0;
  padding: 5px 8px;
  user-select: none;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  border: ${props => props.theme.colors.highlighted} solid 1px;
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 12px;
`;

export default withTheme(Technologies);
