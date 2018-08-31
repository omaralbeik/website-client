// Bootstrap
import {Container} from "reactstrap";

// Styled Components
import styled from "styled-components";


const InnerContainer = styled(Container)`
    background: ${props => props.theme.colors.inner_background};
`;

export default InnerContainer;
