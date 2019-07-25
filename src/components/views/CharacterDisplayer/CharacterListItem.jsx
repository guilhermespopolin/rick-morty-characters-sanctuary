import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCharacterListItem = styled.div``

function CharacterListItem({ character, ...others }) {
  return (
    <StyledCharacterListItem {...others}>
      {character.name}
    </StyledCharacterListItem>
  )
}

CharacterListItem.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    episodes: PropTypes.arrayOf(PropTypes.string),
  }),
}

CharacterListItem.defaultProps = {
  character: {},
}

export default CharacterListItem
