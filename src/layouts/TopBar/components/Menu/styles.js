import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

export const Navigation = styled.nav`
  position: relative;
`

export const Link = styled(RouterLink)`
  color: #f8f8f2;
  font-size: 16px;
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;

  :hover,
  &.selected {
    background: rgba(255, 255, 255, 0.2);
  }
`
