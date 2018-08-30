// Styled Components
import styled from "styled-components";

const Subtitle = styled.h2`
    color: ${ props => props.theme.colors.primary };
    font-family: ${ props => props.theme.fonts.title };
`;

export default Subtitle;
