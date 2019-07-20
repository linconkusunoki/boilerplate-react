import React from 'react'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Navigation>
      <S.Link to="/dashboard" activeClassName="selected">
        Dashboard
      </S.Link>
      <S.Link to="/tasks" activeClassName="selected">
        Tasks
      </S.Link>
      <S.Link to="/profile" activeClassName="selected">
        Profile
      </S.Link>
      <S.Link to="/settings" activeClassName="selected">
        Settings
      </S.Link>
    </S.Navigation>
  )
}

export default Menu
