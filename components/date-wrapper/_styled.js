import styled from 'styled-components';
import Moment from 'react-moment';

export const _div = styled.div`
  margin: 8px auto 0 0;
  opacity: 0.75;
`;

export const _Moment = styled(Moment)`
  color: ${props => props.theme.colors.inner_primary};
  font-size: 10pt;
  font-family: ${props => props.theme.fonts.title};
  padding-bottom: 5px;
  border-bottom: solid 2px ${props => props.theme.colors.inner_primary};
  opacity: 0.75;
`;
