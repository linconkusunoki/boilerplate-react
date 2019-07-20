import React from 'react'
import * as S from './styles'
import { Search, Menu } from './components'
import { logout } from '../../services/auth'
import { withRouter } from 'react-router-dom'
import { routes } from '../../Routes'

const TopBar = ({ history }) => {
  const handleClick = () => {
    logout()
    history.push(routes.root)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Dev<span>Log</span>
        </S.Title>
        <Menu />
        <S.Spacer />
        <Search />
        <S.Logout onClick={handleClick}>Logout</S.Logout>
      </S.Content>
    </S.Wrapper>
  )
}

export default withRouter(TopBar)
