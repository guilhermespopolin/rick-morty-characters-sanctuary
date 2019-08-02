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
function generateAttributes(character = {}, interestedInFields = []) {
  return interestedInFields.map(attribute => ({ attribute, value: character[attribute] }))
}

function CharacterCard({ character, ...others }) {
  const attributes = generateAttributes(character, [
    'species',
    'status',
    'origin',
  ])

  return (
    <StyledCharacterCard data-testid={`card-${character.id}`} {...others}>
      <CharacterCardFigure
        imageSrc={character.image}
        caption={character.name}
      />
      <CharacterCardInfoSection attributes={attributes} />
    </StyledCharacterCard>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
  }),
}

CharacterCard.defaultProps = {
  character: {},
}

export default CharacterCard
