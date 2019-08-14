import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CharacterCardInfoSectionItem = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0.7rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.complement0};
  }
`

const CharacterCardInfoSectionItemAttribute = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.complement0};
`

const CharacterCardInfoSectionItemValue = styled.span`
  flex: 1;
  margin-left: 0.5rem;
  text-align: end;
  font-family: 'Kalam', cursive;
  font-size: 1.1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.lightGray};
`

const StyledCharacterCardInfoSection = styled.section`
  padding: 0 0.7rem;
`

function CharacterCardInfoSection({ attributes }) {
  return (
    <StyledCharacterCardInfoSection>
      {attributes.map(({ attribute, value }) => (
        <CharacterCardInfoSectionItem key={attribute}>
          <CharacterCardInfoSectionItemAttribute>{attribute}</CharacterCardInfoSectionItemAttribute>
          <CharacterCardInfoSectionItemValue>{value}</CharacterCardInfoSectionItemValue>
        </CharacterCardInfoSectionItem>
      ))}
    </StyledCharacterCardInfoSection>
  )
}

CharacterCardInfoSection.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape({
    attribute: PropTypes.string,
    value: PropTypes.string,
  })),
}

CharacterCardInfoSection.defaultProps = {
  attributes: [],
}

export default CharacterCardInfoSection
