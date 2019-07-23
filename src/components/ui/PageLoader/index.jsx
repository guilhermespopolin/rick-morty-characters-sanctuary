import React from 'react'
import PropTypes from 'prop-types'

function Loading({ error, pastDelay, timeout }) {
  if (error) {
    return <h1>Something went wrong!</h1>
  } else if (timeout) {
    return <h1>Is taking a long time...refresh page</h1>
  } else if (pastDelay) {
    // should render loading component.
    // avoid flash of loading component
    return (
      <div
        css={`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${({ theme }) => theme.colors.white};
        `}
      >
        <div
          css="
            width: 64px;
            height: 64px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-image: url(http://i.giphy.com/3og0ISeflb7vrNzy2A.gif);
            background-repeat: no-repeat;
            background-position: center;
          "
        />
      </div>
    )
  }

  return null
}

Loading.propTypes = {
  error: PropTypes.instanceOf(Error),
  pastDelay: PropTypes.bool,
  timeout: PropTypes.bool,
}

Loading.defaultProps = {
  error: null,
  pastDelay: false,
  timeout: false,
}

export default Loading
