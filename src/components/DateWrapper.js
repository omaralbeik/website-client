// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Moment
import Moment from 'react-moment';


class DateWrapper extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    isRelative: PropTypes.bool
  }

  render() {
    const {date, isRelative} = this.props;

    return (
      <Container>
        <StyledMoment fromNow={isRelative} format={isRelative ? null : 'MMMM YYYY'}>{date}</StyledMoment>
      </Container>
    );
  }

}

const Container = styled.div`
  margin: 8px auto 0 0;
  opacity: 0.75;
`;

const StyledMoment = styled(Moment)`
  color: ${props => props.theme.colors.inner_primary};
  font-size: 10pt;
  font-family: ${props => props.theme.fonts.title};
  padding-bottom: 5px;
  border-bottom: solid 2px ${props => props.theme.colors.inner_primary};
  opacity: 0.75;
`

export default DateWrapper;
