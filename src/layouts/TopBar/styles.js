import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #282a36;
  border-bottom: 1px solid #101010;
  padding: 15px;
  color: #f8f8f2;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h2`
  color: #f8f8f2;
  font-size: 22px;
  font-weight: 700;
  margin: 0 20px 0 0;

  span {
    color: #ff5555;
  }
`

export const Spacer = styled.div`
  flex-grow: 1;
`

export const Logout = styled.button`
  background: none;
  border: none;
  color: #f8f8f2;
  padding: 0;
  margin-left: 20px;

  :hover {
    color: #ff5555;
    cursor: pointer;
  }
`
