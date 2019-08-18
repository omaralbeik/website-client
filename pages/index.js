import React, { Component } from 'react';
import Router from 'next/router';
import { blogLink } from 'links';

class Index extends Component {

  static async getInitialProps(ctx) {
    // redirect to /blog
    if (ctx && ctx.req) {
      ctx.res.writeHead(302, {Location: blogLink.url});
      ctx.res.end();
    } else {
      Router.push(blogLink.url);
    }
  }

}

export default Index;
