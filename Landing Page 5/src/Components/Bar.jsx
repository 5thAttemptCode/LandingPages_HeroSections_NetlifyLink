import React from 'react'
import { styled } from 'styled-components'

export const Bar = styled.nav`
  width: 100%;
  padding: 12px 3vw;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 50px;
  color: white;
  line-height: 80%;
  background: ${(props) => props.background};
`

export default Bar