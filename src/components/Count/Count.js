import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Nav from 'components/Nav'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #333;
  color: #333;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background: #333;
    cursor: pointer;
    color: white;
  }
`

const Title = styled.h1`
  font-family: sans-serif;
  color: #333;
`

export const Count = ({ total, increase, decrease }) => {
  return (
    <React.Fragment>
      <Nav />
      <Title>Total: {total}</Title>
      <Button onClick={increase} id="increase">
        +
      </Button>
      <Button onClick={decrease} id="decrease">
        -
      </Button>
    </React.Fragment>
  )
}

Count.propTypes = {
  total: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default Count
