import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useDebounce from 'presentation/useDebounce'
import useRickAndMortyCharactersInfo from 'presentation/useRickAndMortyCharactersInfo'

import CharacterListFilter from './CharacterListFilter'
import CharacterCardList from './CharacterCardList'
import CharacterListControls from './CharacterListControls'

const DEBOUNCE_DELAY = 600

const StyledCharacterDisplayer = styled.section`
  display: inline-flex;
  flex-flow: column nowrap;
`

function CharacterDisplayer({ className }) {
  const [characterName, setCharacterName] = useState('')
  const debouncedCharacterName = useDebounce(characterName, DEBOUNCE_DELAY)
  const { data, api } = useRickAndMortyCharactersInfo(debouncedCharacterName)

  return (
    <StyledCharacterDisplayer className={className}>
      <CharacterListFilter
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
        error={data.meta.error}
      />
      <CharacterCardList characters={data.characters} />
      <CharacterListControls
        hasPrevious={data.meta.hasPrevious}
        hasNext={data.meta.hasNext}
        onPreviousPage={() => api.getPreviousPage()}
        onNextPage={() => api.getNextPage()}
      />
    </StyledCharacterDisplayer>
  )
}

CharacterDisplayer.propTypes = {
  className: PropTypes.string,
}

CharacterDisplayer.defaultProps = {
  className: '',
}

export default CharacterDisplayer
