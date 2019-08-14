import React from 'react'
import styled from 'styled-components'

import CharacterDisplayer from 'components/views/CharacterDisplayer'

import charactersSanctuaryHeader from 'assets/images/characters-sanctuary-header.png'
import rickImage from 'assets/images/rick.png'

const StyledHome = styled.main`
  min-height: 100vh;
  padding: 0 1.2rem;
  display: grid;
  grid-template-columns: minmax(360px, 1200px);
  grid-template-rows: auto 1fr minmax(10%, 20%);
  grid-gap: 1.2rem;
  justify-content: center;
`

const PositionatedHeader = styled.img`
  grid-column: 2 / -2;
  height: auto;
  max-width: 80%;
  justify-self: center;
`

const PositionatedFooterImage = styled.img`
  grid-row: -1;
  justify-self: end;
  height: 100%;
  width: 30%;
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
      <PositionatedFooterImage src={rickImage} alt="Rick" />
    </StyledHome>
  )
}

export default Home
