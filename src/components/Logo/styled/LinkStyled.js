import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: block;
  background: transparent;
  color: #1D5B3B;
  text-decoration: none;
  vertical-align: middle;
  &:hover {
    color: yellow;
  }
`

export default LinkStyled
