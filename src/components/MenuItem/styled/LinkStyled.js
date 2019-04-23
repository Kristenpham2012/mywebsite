import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: table-cell;
  background: transparent;
  color: #333;
  text-decoration: none;
  vertical-align: top;
  padding-left: 1rem;
  &:hover {
    color: #cfd8dd;
  }
`

export default LinkStyled
