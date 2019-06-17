// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import {Container} from 'reactstrap';
import ErrorContainer from '../components/ErrorContainer';


class Error extends Component {
  static propTypes = {
    error: PropTypes.string
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {error} = this.props;

    return (
      <Container>
        <ErrorContainer error={error}/>
      </Container>
    );
  }

}

export default Error;
