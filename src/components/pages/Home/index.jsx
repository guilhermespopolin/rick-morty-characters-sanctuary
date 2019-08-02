import React from 'react'
import styled from 'styled-components'

import CharacterDisplayer from 'components/views/CharacterDisplayer'

import charactersSanctuaryHeader from 'assets/images/characters-sanctuary-header.png'
import rickImage from 'assets/images/rick.png'

const StyledHome = styled.main`
  height: 100vh;
  padding: 0 1.2rem;
  display: grid;
  grid-template-columns:
    minmax(80px, 120px)
    minmax(480px, 1000px)
    minmax(80px, 120px);
  grid-template-rows: auto 1fr;
  grid-gap: 1.2rem;
  justify-content: center;
`

const PositionatedHeader = styled.img`
  grid-column: 2 / -2;
  height: auto;
  max-width: 90%;
  justify-self: center;

`

const PositionatedFooterImage = styled.img`
  grid-column: -2;
  grid-row: -1;
  height: auto;
  width: 100%;
`

const PositionatedCharacterDisplayer = styled(CharacterDisplayer)`
  grid-column: 1 / -1;
`

function Home() {
  return (
    <StyledHome>
      <PositionatedHeader
        src={charactersSanctuaryHeader}
        alt="Rick & Morty - characters sanctuary"
      />
      <PositionatedCharacterDisplayer />
      <PositionatedFooterImage
        src={rickImage}
        alt="Rick"
      />
    </StyledHome>
  )
}

export default Home
