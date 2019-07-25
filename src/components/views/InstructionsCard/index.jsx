import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import paperTexture from 'assets/images/paper-texture.png'

const StyledInstructionsCard = styled.div`
  display: inline-block;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.paperYellow};
  background-image: url(${paperTexture});
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  font-family: 'Kalam', cursive;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  transform: rotate(-2deg);
`

const InstructionsCardTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
  font-family: inherit;
  margin: 0;
`

function InstructionsCard({ className }) {
  return (
    <StyledInstructionsCard className={className}>
      <InstructionsCardTitle>Basic Instructions</InstructionsCardTitle>
      <ol>
        <li>Use control buttons or filter text input to manipulate character list</li>
        <li>Use characters card to check info about a character of your interest</li>
        <li>Click on a character card to check info about the episodes he/she/it shows up</li>
      </ol>
    </StyledInstructionsCard>
  )
}

InstructionsCard.propTypes = {
  className: PropTypes.string,
}

InstructionsCard.defaultProps = {
  className: '',
}

export default InstructionsCard
