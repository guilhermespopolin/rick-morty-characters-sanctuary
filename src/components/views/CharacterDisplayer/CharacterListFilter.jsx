import React from 'react'
import styled from 'styled-components'

import { MdSearch as SearchIcon } from 'react-icons/md'
import Input from 'components/ui/Input'

const CharacterListFilterInput = styled(Input)`
  align-self: center;
`

function CharacterListFilter(props) {
  return (
    <CharacterListFilterInput
      type="text"
      placeholder="Enter character name"
      icon={<SearchIcon size={24} />}
      {...props}
    />
  )
}

export default CharacterListFilter
