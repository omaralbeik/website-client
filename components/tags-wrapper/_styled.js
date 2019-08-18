import styled from 'styled-components';
import { Badge } from 'reactstrap';

export const _Badge = styled(Badge)`
  margin: 3px 6px 3px 0;
  padding: 5px 8px;
  user-select: none;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  border: ${props => props.theme.colors.highlighted} solid 1px;
`;

export const _div = styled.div`
  margin-top: 12px;
  text-align: center;
`;
