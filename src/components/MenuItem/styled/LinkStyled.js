import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: table;
  background: transparent;
  color: #fff;
  text-decoration: none;
  vertical-align: top;
  padding-left: 1rem;
  &:hover {
    color: #cfd8dd;
  }
  font-family: 'Heebo', sans-serif;
  font-size: 14px;
  border: 1px solid #fff;
  border-top: none;
  border-bottom: none;
  border-spacing: 10px; 
  border-left: none;
  margin-top: 3px;
`

export default LinkStyled
