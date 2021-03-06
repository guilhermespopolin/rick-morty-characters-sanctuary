import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MdNavigateBefore as PreviousIcon, MdNavigateNext as NextIcon } from 'react-icons/md'
import Button from 'components/ui/Button'

const StyledCharacterListControls = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

function CharacterListControls({
  hasPrevious,
  onPreviousPage,
  hasNext,
  onNextPage,
}) {
  return (
    <StyledCharacterListControls>
      <Button
        disabled={!hasPrevious}
        icon={<PreviousIcon size={16} />}
        onClick={onPreviousPage}
      >
        Previous
      </Button>
      <Button
        style={{ marginLeft: '1rem' }}
        disabled={!hasNext}
        icon={<NextIcon size={16} />}
        iconRight
        onClick={onNextPage}
      >
        Next
      </Button>
    </StyledCharacterListControls>
  )
}

CharacterListControls.propTypes = {
  hasPrevious: PropTypes.bool,
  onPreviousPage: PropTypes.func,
  hasNext: PropTypes.bool,
  onNextPage: PropTypes.func,
}

CharacterListControls.defaultProps = {
  hasPrevious: false,
  onPreviousPage: () => {},
  hasNext: false,
  onNextPage: () => {},
}

export default CharacterListControls
