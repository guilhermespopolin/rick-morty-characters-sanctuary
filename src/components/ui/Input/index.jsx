import styled from 'styled-components'

const Input = styled.input`
  outline: none;
  padding: 0.5rem 0.3rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  color: var(--darkGray);

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

export default Input
