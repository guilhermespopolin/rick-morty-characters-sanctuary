import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const errorModifier = ({ error, theme }) => {
  if (error) {
    return `
      border: 2px solid ${theme.colors.error};

      &:focus, &:active {
        border: 2px solid ${theme.colors.error};
      }
    `
  }

  return null
}

const InputWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0.3rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.complement4};
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  color: var(--darkGray);

  &:focus, &:active {
    border: 2px solid ${({ theme }) => theme.colors.complement0}
  }

  ${errorModifier}
`

const InputError = styled.span`
  display: inline-block;
  height: 16px;
  margin-top: 0.5rem;
  font-family: 'Oswald', sans-serif;
  color: ${({ theme }) => theme.colors.error};
`

function Input({
  className,
  value,
  onChange,
  error,
  ...others
}) {
  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={onChange}
        error={error}
        {...others}
      />
      <InputError data-testid="input-error-message">{error}</InputError>
    </InputWrapper>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
  error: '',
}

export default Input
