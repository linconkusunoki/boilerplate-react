import styled from 'styled-components'
import { Form as UnForm, Input as UnInput } from '@rocketseat/unform'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
  background: #282a36;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled(UnForm)`
  background: #191a21;
  border: 2px solid #191a21;
  box-shadow: 0 2px 4px 0 #333;
  padding: 30px;
  width: 420px;
`

export const Input = styled(UnInput)`
  background: #282a36;
  border: 2px solid #282a36;
  box-sizing: border-box;
  color: #f8f8f2;
  display: block;
  font-size: 14px;
  line-height: 1;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`

export const Title = styled.h1`
  color: #f8f8f2;
  margin: 0 0 10px;
  font-size: 28px;
`

export const Text = styled.p`
  margin: 0;
  color: #f8f8f2;
  font-size: 14px;
`

export const Button = styled.button`
  border: none;
  background: #44475a;
  color: #fff;
  padding: 10px;
  font-size: 14px;

  :hover {
    cursor: pointer;
    background: #0072be;
  }
`

export const Link = styled(RouterLink)`
  color: #0072be;
  font-size: 14px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Divider = styled.div`
  border-top: 1px solid #44475a;
  margin: 20px 0;
`

export const Error = styled.p`
  color: #ff5555;
  font-size: 14px;
  text-align: center;
`
