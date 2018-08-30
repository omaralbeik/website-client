// Styled Components
import styled from "styled-components";

// Bootstrap
import { Container } from "reactstrap";

const InnerContainer = styled(Container)`
    background: ${ props => props.theme.colors.inner_background };
`;

export default InnerContainer;