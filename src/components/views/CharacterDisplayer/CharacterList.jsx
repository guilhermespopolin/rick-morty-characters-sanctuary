import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CharacterListItem from './CharacterListItem'

const StyledCharacterList = styled.div``

function CharacterList({ characters }) {
  const content = characters.map(character => (
    <CharacterListItem key={character.id} character={character} />
  ))

  return (
    <StyledCharacterList>
      {content}
    </StyledCharacterList>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({

  })),
}

CharacterList.defaultProps = {
  characters: [],
}

export default CharacterList
