import React from 'react'
import styled from "styled-components";

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text);
`

const ToDo = () => {
  return (
    <RootContainer>ToDo</RootContainer>
  )
}

export default ToDo