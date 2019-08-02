import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Loading from 'components/ui/Loading'
import CharacterCard from 'components/views/CharacterCard'

const StyledCharacterCardList = styled.div`
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.3rem;
  align-items: center;
  justify-items: center;
  padding: 1.2rem 1rem;
`

function CharacterCardList({ characters, isLoading }) {
  const content = isLoading ? (
    <Loading />
  ) : (
    characters.map(character => (
      <CharacterCard key={character.id} character={character} />
    ))
  )

  return (
    <StyledCharacterCardList>
      {content}
    </StyledCharacterCardList>
  )
}

CharacterCardList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
    attributes: PropTypes.arrayOf(PropTypes.shape({
      attribute: PropTypes.string,
      value: PropTypes.string,
    })),
  })),
  isLoading: PropTypes.bool,
}

CharacterCardList.defaultProps = {
  characters: [],
  isLoading: false,
}

export default CharacterCardList
