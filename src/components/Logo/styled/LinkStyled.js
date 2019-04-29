import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: block;
  background: transparent;
  color: #268B71;
  text-decoration: none;
  padding-bottom: -10px;
  vertical-align: middle;
  font-size: 24px;
  font-weight: normal;
  &:hover {
    color: #cfd8dd	;
  }
  font-family: 'Special Elite', cursive;
`

export default LinkStyled
