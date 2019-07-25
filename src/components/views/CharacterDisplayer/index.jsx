import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useDebounce from 'presentation/useDebounce'
import useRickAndMortyCharacterInfo from 'presentation/useRickAndMortyCharacterInfo'

import CharacterListFilter from './CharacterListFilter'
import CharacterList from './CharacterList'
import CharacterListControls from './CharacterListControls'

const DEBOUNCE_DELAY = 600

const StyledCharacterDisplayer = styled.section`
  display: inline-flex;
  flex-flow: column nowrap;
  padding: 1rem 1.2rem;
  border: 1px solid black;
`

function CharacterDisplayer({ className }) {
  const [characterName, setCharacterName] = useState('')
  const debouncedCharacterName = useDebounce(characterName, DEBOUNCE_DELAY)
  const { data, api } = useRickAndMortyCharacterInfo(debouncedCharacterName)

  return (
    <StyledCharacterDisplayer className={className}>
      <CharacterListFilter
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
        error={data.meta.error}
      />
      <CharacterList characters={data.characters} />
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
