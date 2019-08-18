import React, { Component } from 'react';
import Err from 'components/error';
import { errorStrings } from 'static/strings';

class Error extends Component {

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { error: err, statusCode };
  }

  render() {
    var { error } = this.props;
    const { statusCode } = this.props;
    if (!error) {
      error = `${statusCode}`;
    }
    if (statusCode === 404 || error === 'No Results') {
      error = errorStrings.notFound;
    }
    return <Err error={error} />;
  }

}

export default Error;
