// React
import React, {Component} from "react";

// Bootstrap
import {Container} from 'reactstrap';

// Components
import PostCell from '../components/PostCell';
import PageTitle from '../components/PageTitle';

// Links
import {blogLink} from '../links';


class Blog extends Component {

  render() {
    const post = {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: "1976-04-19T12:59-0500",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor …"
    };

    return (
      <Container>
        <PageTitle>{blogLink.title}</PageTitle>
        <PostCell post={post}/>
        <PostCell post={post}/>
        <PostCell post={post}/>
        <PostCell post={post}/>
        <PostCell post={post}/>
        <PostCell post={post}/>
      </Container>
    );
  }

}

export default Blog;
