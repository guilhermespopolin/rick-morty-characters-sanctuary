import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MdSearch as SearchIcon } from 'react-icons/md'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'

const StyledCharacterListFilter = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: center;
`

function CharacterListFilter({ onSetSearchTerm, disableSearch, error }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    onSetSearchTerm(value)
  }

  return (
    <StyledCharacterListFilter onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter character name"
        value={value}
        onChange={e => setValue(e.target.value)}
        error={error}

      />
      <Button
        icon={<SearchIcon size={24} />}
        iconRight
        type="submit"
        disabled={disableSearch}
      >
        Show me what you got
      </Button>
    </StyledCharacterListFilter>
  )
}

CharacterListFilter.propTypes = {
  onSetSearchTerm: PropTypes.func,
  disableSearch: PropTypes.bool,
  error: PropTypes.string,
}

CharacterListFilter.defaultProps = {
  onSetSearchTerm: () => {},
  disableSearch: false,
  error: '',
}

export default CharacterListFilter
