import React from 'react'
import styled from 'styled-components'

import Input from 'components/ui/Input'

const CharacterListInput = styled(Input)`
  align-self: center;
`

function CharacterListFilter(props) {
  return <CharacterListInput type="text" placeholder="Enter character name" {...props} />
}

export default CharacterListFilter
