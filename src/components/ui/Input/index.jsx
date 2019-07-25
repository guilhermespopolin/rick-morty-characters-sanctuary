import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const errorModifier = ({ error, theme }) => {
  if (error) {
    return `
      &:focus, &:active {
        border: 1px solid ${theme.colors.complement0};
      }
    `
  }

  return ''
}

const InputWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
`

const StyledInput = styled.input`
  outline: none;
  padding: 0.5rem 0.3rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  color: var(--darkGray);

  &:focus, &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary0};
  }

  ${errorModifier}
`

const InputError = styled.span`
  display: inline-block;
  height: 15px;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.complement0};
`

function Input({
  className,
  value,
  onChange,
  error,
  ...others
}) {
  return (
    <InputWrapper className={className}>
      <StyledInput
        value={value}
        onChange={onChange}
        error={error}
        {...others}
      />
      <InputError>{error}</InputError>
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
