import styled from 'styled-components';
import Img from 'react-image';
import { sm, md } from 'styles/breakpoints';

export const _Img = styled(Img)`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 40px;
  @media (${sm}), (${md}) {
    display: none;
  }
`;
