import { useReducer, useEffect } from 'react'

const STATUS_OK = 200
const STATUS_NOT_FOUND = 404
const SET = 'SET'
const LOADING = 'LOADING'
const DONE = 'DONE'
const ERROR = 'ERROR'

async function getData(url, dispatch) {
  function mapPayloadFromResponse(response) {
    return {
      meta: {
        prev: response.info.prev,
        next: response.info.next,
      },
      data: response.results,
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
    dispatch({ type: ERROR, payload: err })
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
function reducer(state, { type, payload }) {
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

function useRickAndMortyCharacterInfo(characterName = '') {
  const [state, dispatch] = useReducer(reducer, initialState)

  function getPreviousPage() {
    if (state.meta.prev) {
      getData(state.meta.prev, dispatch)
    }
  }

  function getNextPage() {
    getData(state.meta.next, dispatch)
  }

  useEffect(() => {
    function gethRickAndMortyCharacters() {
      const URL = 'https://rickandmortyapi.com/api/character{characterName}'
      const parsedURL = URL.replace('{characterName}', characterName ? `?name=${characterName}` : '')
      const encodedURL = encodeURI(parsedURL)

      getData(encodedURL, dispatch)
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

export default useRickAndMortyCharacterInfo
