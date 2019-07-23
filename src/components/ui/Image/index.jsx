import styled from 'styled-components'
import PropTypes from 'prop-types'

const sizeModifier = ({ size, theme }) => {
  if (size === 'responsive') {
    return `
      width: 100%;
      height: auto;
    `
  }

  return `
    height: ${theme.imageSize[size]};
    width: ${theme.imageSize[size]};
  `
}

const Image = styled.img`
  ${sizeModifier}
`

Image.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
}

Image.defaultProps = {
  size: 'medium',
}

export default Image
