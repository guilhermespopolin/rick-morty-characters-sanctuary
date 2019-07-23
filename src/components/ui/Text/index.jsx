import styled from 'styled-components'
import PropTypes from 'prop-types'

const sizeModifier = ({ size, theme }) => `font-size: ${theme.fontSize[size]};`
const alignmentModifier = ({ alignment }) => `text-align: ${alignment};`

const Text = styled.p`
   margin: 1rem 0;
   ${sizeModifier}
   ${alignmentModifier}
`

Text.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
}

Text.defaultProps = {
  size: 'medium',
  alignment: 'justify',
}

export default Text
