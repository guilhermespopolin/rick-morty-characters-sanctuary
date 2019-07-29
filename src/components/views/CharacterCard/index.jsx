import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CharacterCardFigure from './CharacterCardFigure'
import CharacterCardInfoSection from './CharacterCardInfoSection'

const StyledCharacterCard = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  width: 250px;
  height: 452px;
  border: 1px solid var(--white);
  border-radius: 4px;
  box-shadow: 0 0 4px 2px rgba(236, 113, 0, 0.4);
`

function CharacterCard({ character, ...others }) {
  return (
    <StyledCharacterCard data-testid={`card-${character.id}`} {...others}>
      <CharacterCardFigure
        imageSrc={character.image}
        caption={character.name}
      />
      <CharacterCardInfoSection attributes={character.attributes} />
    </StyledCharacterCard>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    attributes: PropTypes.arrayOf(PropTypes.shape({
      attribute: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
}

CharacterCard.defaultProps = {
  character: {},
}

export default CharacterCard
