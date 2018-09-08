// React
import React, {Component} from "react";

// Styled Components
import {withTheme} from 'styled-components';

// Components
import {Container} from 'reactstrap';
import FreeCodeContainer from '../components/FreeCodeContainer';


class BlogPostDetails extends Component {
  render() {
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    const html = "<h1>Title (h1)</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n\n<h2>Title (h2)</h2>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n\n<h3>Title (h3)</h3>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n\n<h4>Title (h4)</h4>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n\n<div class=\"codehilite\"><pre><span></span><code><span class=\"kd\">func</span> <span class=\"nf\">test</span><span class=\"p\">()</span> <span class=\"p\">{</span>\n  <span class=\"bp\">print</span><span class=\"p\">(</span><span class=\"s\">&quot;Hello World!&quot;</span><span class=\"p\">)</span>         \n<span class=\"p\">}</span>\n\n<span class=\"kd\">struct</span> <span class=\"nc\">User</span> <span class=\"p\">{</span>\n  <span class=\"kd\">var</span> <span class=\"nv\">id</span><span class=\"p\">:</span> <span class=\"nb\">Int</span><span class=\"p\">,</span>\n  <span class=\"kd\">var</span> <span class=\"nv\">name</span><span class=\"p\">:</span> <span class=\"nb\">String</span>\n<span class=\"p\">}</span>\n\n<span class=\"kd\">extension</span> <span class=\"nc\">User</span><span class=\"p\">:</span> <span class=\"n\">Codable</span> <span class=\"p\">{</span>\n\n<span class=\"p\">}</span>\n</code></pre></div>\n"

    return (
      <Container>
        <FreeCodeContainer dangerouslySetInnerHTML={{__html: html}} className={syntaxClassName}></FreeCodeContainer>
      </Container>
    );
  }

}

export default withTheme(BlogPostDetails);
