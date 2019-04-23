import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: block;
  background: transparent;
  color: #268B71;
  text-decoration: none;
  padding-bottom: -10px;
  vertical-align: middle;
  font-family: 'Acme', sans-serif;
  &:hover {
    color: #FFA500	;
  }
`

export default LinkStyled
