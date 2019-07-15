// React
import React, {Component} from 'react';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {Container, Table} from 'reactstrap';

// Components
import APIItem from '../components/APIItem';

// Links
import {apiLink} from '../links';

// Strings
import {apiStrings} from '../strings';


class API extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {items} = apiLink;
    return (      
      <Container>
        <h1>{apiLink.title}</h1>
        <p>{apiStrings.subtitle}<br/>{apiStrings.body}</p>
        <StyledTable responsive hover>
          <thead>
            <tr>
              <th>URL</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => <APIItem key={i.name} item={i}/>)}
          </tbody>
        </StyledTable>
      </Container>
    );
  }

}

const StyledTable = styled(Table)`
  margin-top: 50px;
`;

export default API;
