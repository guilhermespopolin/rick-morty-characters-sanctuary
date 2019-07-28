import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const errorModifier = ({ error, theme }) => {
  if (error) {
    return `
      border-bottom: 2px solid ${theme.colors.error};

      &:focus, &:active {
        border-bottom: 2px solid ${theme.colors.error};
      }
    `
  }

  return null
}
const paddingModifier = ({ icon }) => (
  icon ? 'padding: 0.5rem 2.5rem 0.5rem 0.3rem;' : 'padding: 0.5rem 0.3rem;'
)

const InputWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.colors.complement4};
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  color: var(--darkGray);

  &:focus, &:active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.complement0}
  }

  ${paddingModifier}
  ${errorModifier}
`

const InputError = styled.span`
  display: inline-block;
  height: 15px;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.error};
`

function Input({
  className,
  value,
  onChange,
  icon,
  error,
  ...others
}) {
  const basicInput = (
    <StyledInput
      value={value}
      onChange={onChange}
      icon={icon}
      error={error}
      {...others}
    />
  )
  const input = icon ? (
    <div style={{ position: 'relative' }}>
      {basicInput}
      {React.cloneElement(icon, { style: { position: 'absolute', right: 8, top: 'calc(50% - 12px)' } })}
    </div>
  ) : basicInput

  return (
    <InputWrapper className={className}>
      {input}
      <InputError>{error}</InputError>
    </InputWrapper>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.element,
  error: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
  icon: null,
  error: '',
}

export default Input
