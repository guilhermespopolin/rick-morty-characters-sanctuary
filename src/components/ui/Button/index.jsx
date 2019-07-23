import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`

export default Button
