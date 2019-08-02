import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useRickAndMortyCharactersInfo from 'presentation/useRickAndMortyCharactersInfo'

import CharacterListFilter from './CharacterListFilter'
import CharacterCardList from './CharacterCardList'
import CharacterListControls from './CharacterListControls'

const StyledCharacterDisplayer = styled.section`
  display: inline-flex;
  flex-flow: column nowrap;
`

function CharacterDisplayer({ className }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, api } = useRickAndMortyCharactersInfo(searchTerm)

  const controls = !data.meta.isLoading ? (
    <CharacterListControls
      hasPrevious={data.meta.hasPrevious}
      hasNext={data.meta.hasNext}
      onPreviousPage={() => api.getPreviousPage()}
      onNextPage={() => api.getNextPage()}
    />
  ) : null

  return (
    <StyledCharacterDisplayer className={className}>
      <CharacterListFilter
        onSetSearchTerm={setSearchTerm}
        disableSearch={data.meta.isLoading}
        error={data.meta.error}
      />
      <CharacterCardList
        characters={Object.values(data.characters)}
        isLoading={data.meta.isLoading}
      />
      {controls}
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
