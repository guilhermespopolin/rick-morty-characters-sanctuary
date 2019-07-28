import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CharacterCardFigureImage = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const CharacterCardFigureCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1rem 0.7rem;
  font-family: 'Kalam', cursive;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.complement0};
  background-color: rgba(37, 44, 58, 0.9);
`

const StyledCharacterCardFigure = styled.figure`
  position: relative;
  margin: 0;
`

function CharacterCardFigure({ imageSrc, caption }) {
  return (
    <StyledCharacterCardFigure>
      <CharacterCardFigureImage src={imageSrc} alt={caption} />
      <CharacterCardFigureCaption>{caption}</CharacterCardFigureCaption>
    </StyledCharacterCardFigure>
  )
}

CharacterCardFigure.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

export default CharacterCardFigure
