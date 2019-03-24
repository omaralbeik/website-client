// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Moment
import Moment from 'react-moment';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {sm} from '../breakpoints';

class PostTitle extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const {post} = this.props;

    return (
      <Container>
        <h1>{post.title}</h1>
        <h2><Moment format='LL' date={post.date_published}/></h2>
      </Container>
    );
  }

}

const Container = styled.div`
    h1 {
        font-size: 32px;
        @media (${sm}) {
            font-size: 24px;
        }
    }
    h2 {
        font-family: ${props => props.theme.fonts.body};
        margin-bottom: 24px;
        font-size: 18px;
        @media (${sm}) {
            font-size: 12px;
        }
    }
`;

export default PostTitle;
