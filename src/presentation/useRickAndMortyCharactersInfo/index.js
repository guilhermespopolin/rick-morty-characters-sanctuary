import { useReducer, useEffect } from 'react'

import guaranteeArray from 'helpers/guaranteeArray'

const STATUS_OK = 200
const STATUS_NOT_FOUND = 404
const SET = 'SET'
const LOADING = 'LOADING'
const DONE = 'DONE'
const ERROR = 'ERROR'

function normalizeCharacter(character = {}) {
  const interestedInAttributes = [
    'id',
    'name',
    'image',
    'status',
    'species',
    'origin',
  ]
  const grouppedAttributes = ['status', 'species', 'origin']
  const interestedInAttributesDataSelectorMap = interestedInAttributes
    .reduce((resultantMap, attribute) => {
      if (attribute === 'origin') {
        return {
          ...resultantMap,
          [attribute]: srcObject => srcObject[attribute].name,
        }
      }

      return {
        ...resultantMap,
        [attribute]: srcObject => srcObject[attribute],
      }
    }, {})

  return Object.keys(interestedInAttributesDataSelectorMap)
    .reduce((normalizedCharacter, attribute) => {
      if (grouppedAttributes.includes(attribute)) {
        return {
          ...normalizedCharacter,
          attributes: [
            ...normalizedCharacter.attributes,
            {
              attribute,
              value: interestedInAttributesDataSelectorMap[attribute](character),
            },
          ],
        }
      }

      return {
        ...normalizedCharacter,
        [attribute]: interestedInAttributesDataSelectorMap[attribute](character),
      }
    }, { attributes: [] })
}

function normalizeCharacterList(characters = []) {
  return characters.map(normalizeCharacter)
}

async function fetchData(url, dispatch, normalizeResponse = response => response) {
  function mapPayloadFromResponse(response) {
    return {
      meta: {
        prev: response.info ? response.info.prev : '',
        next: response.info ? response.info.next : '',
      },
      data: guaranteeArray(normalizeResponse(response.results || response)),
    }
  }

  try {
    // reset error state
    dispatch({ type: ERROR, payload: null })
    dispatch({ type: LOADING })

    const response = await fetch(url)
    const jsonReponse = await response.json()

    switch (response.status) {
      case STATUS_OK:
        dispatch({ type: SET, payload: mapPayloadFromResponse(jsonReponse) })
        break
      case STATUS_NOT_FOUND:
        dispatch({ type: ERROR, payload: 'No entry was founded with this search term' })
        break
      default:
        break
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  } finally {
    dispatch({ type: DONE })
  }
}

const initialState = {
  meta: {
    isLoading: false,
    error: null,
    next: '',
    prev: '',
  },
  characters: [],
}
function useRickAndMortyCharactersInfoReducer(state, { type, payload }) {
  switch (type) {
    case SET:
      return {
        meta: {
          ...state.meta,
          ...payload.meta,
        },
        characters: payload.data,
      }
    case LOADING:
      return {
        ...state,
        meta: {
          ...state.meta,
          isLoading: true,
        },
      }
    case DONE:
      return {
        ...state,
        meta: {
          ...state.meta,
          isLoading: false,
        },
      }
    case ERROR:
      return {
        ...state,
        meta: {
          ...state.meta,
          error: payload,
        },
      }
    default:
      return state
  }
}

function useRickAndMortyCharactersInfo(characterName = '') {
  const [state, dispatch] = useReducer(useRickAndMortyCharactersInfoReducer, initialState)

  function getPreviousPage() {
    if (state.meta.prev) {
      fetchData(state.meta.prev, dispatch, normalizeCharacterList)
    }
  }

  function getNextPage() {
    fetchData(state.meta.next, dispatch, normalizeCharacterList)
  }

  useEffect(() => {
    function gethRickAndMortyCharacters() {
      const URL = 'https://rickandmortyapi.com/api/character{characterName}'
      const parsedURL = URL.replace('{characterName}', characterName ? `?name=${characterName}` : '')
      const encodedURL = encodeURI(parsedURL)

      fetchData(encodedURL, dispatch, normalizeCharacterList)
    }

    gethRickAndMortyCharacters()
  }, [characterName])

  return {
    data: {
      meta: {
        isLoading: state.meta.isLoading,
        error: state.meta.error,
        hasPrevious: !!state.meta.prev,
        hasNext: !!state.meta.next,
      },
      characters: state.characters,
    },
    api: {
      getPreviousPage,
      getNextPage,
    },
  }
}

export default useRickAndMortyCharactersInfo
