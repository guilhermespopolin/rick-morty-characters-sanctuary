import React from 'react'
import styled, { keyframes } from 'styled-components'

const upDown = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 15px);
  }

  100% {
    transform: translate(0, 0);
  }
`

const StyledLoading = styled.div``

const Ball = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.complement4};

  &[data-id="1"] {
    animation: ${upDown} 0.6s 0.1s linear infinite;
  }

  &[data-id="2"] {
    animation: ${upDown} 0.6s 0.2s linear infinite;
  }

  &[data-id="3"] {
    animation: ${upDown} 0.6s 0.3s linear infinite;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`

function Loading() {
  return (
    <StyledLoading>
      <Ball data-id={1} />
      <Ball data-id={2} />
      <Ball data-id={3} />
    </StyledLoading>
  )
}

export default Loading
