import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary0};
  border: none;
  outline: none;
  border-radius: 3px;
  min-width: 60px;

  &:hover:enabled {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary1};
  }

  &:disabled {
    opacity: 0.4;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`

function Button({
  onClick,
  children,
  icon,
  iconRight,
  ...others
}) {
  const content = iconRight ? (
    <Fragment>
      {children}
      {icon ? React.cloneElement(icon, { style: { marginLeft: '0.5rem' } }) : null}
    </Fragment>
  ) : (
    <Fragment>
      {icon ? React.cloneElement(icon, { style: { marginRight: '0.5rem' } }) : null}
      {children}
    </Fragment>
  )

  return (
    <StyledButton onClick={onClick} {...others}>
      {content}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.element,
  iconRight: PropTypes.bool,
}

Button.defaultProps = {
  onClick: () => {},
  children: 'Click me!',
  icon: null,
  iconRight: false,
}

export default Button
