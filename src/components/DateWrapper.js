// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Components
import Separator from './Separator';

// Moment
import Moment from 'react-moment';


class DateWrapper extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    isRelative: PropTypes.bool.isRequired
  }

  render() {
    const {date, isRelative} = this.props;

    return (
      <div>
        <StyledMoment fromNow={isRelative} format={isRelative ? null : 'YYYY/MM/DD'}>{date}</StyledMoment>
        <StyledSeparator/>
      </div>
    );
  }

}

const StyledMoment = styled(Moment)`
  font-family: ${props => props.theme.fonts.title};
`

const StyledSeparator = styled(Separator)`
  margin: 5px auto 0 0;
  width: 100px;
  opacity: 1;
  border-top: 1px solid ${props => props.theme.colors.primary};
`

export default DateWrapper;
