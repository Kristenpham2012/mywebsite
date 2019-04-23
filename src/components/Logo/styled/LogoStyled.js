import styled from "styled-components"
import breakpoints from "../../../theme/breakpoints"

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 2rem;
  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
  line-height: 0;
  height: 50%;
  width: 100%;
`

export default LogoStyled
