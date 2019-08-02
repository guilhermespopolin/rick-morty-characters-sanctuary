import { useEffect, useReducer } from 'react'
import { normalize } from 'normalizr'

import charactersSchema from 'presentation/schemas/characters'

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const DONE = 'DONE'
const SET = 'SET'
const STATUS_OK = 200
const STATUS_NOT_FOUND = 404

const initialState = {
  meta: {
    isLoading: false,
    error: null,
    next: '',
    prev: '',
  },
  data: { characters: {} },
}

function normalizeCharacters(charactersResponse) {
  const { info, results: characters } = charactersResponse

  return {
    meta: {
      prev: info ? info.prev : '',
      next: info ? info.next : '',
    },
    data: normalize(characters, charactersSchema).entities,
  }
}

function useRickAndMortyDataReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case LOADING:
      return {
        ...state,
        meta: { ...state.meta, isLoading: true },
      }
    case ERROR:
      return {
        ...state,
        meta: { ...state.meta, error: payload },
      }
    case DONE:
      return {
        ...state,
        meta: { ...state.meta, isLoading: false },
      }
    case SET:
      return {
        ...state,
        meta: { ...state.meta, ...payload.meta },
        data: payload.data,
      }
    default:
      return state
  }
}

async function fetchData(url, dispatch, responseNormalizer = response => response) {
  try {
    dispatch({ type: ERROR, payload: null })
    dispatch({ type: LOADING })

    const reponse = await fetch(url)
    if (reponse.status === STATUS_OK) {
      const reponseJson = await reponse.json()

      dispatch({
        type: SET,
        payload: responseNormalizer(reponseJson),
      })
    } else if (reponse.status === STATUS_NOT_FOUND) {
      dispatch({ type: ERROR, payload: 'No entry was found based on this search tearm' })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message)
  } finally {
    dispatch({ type: DONE })
  }
}

function useRickAndMortyData(searchTerm = '') {
  const [state, dispatch] = useReducer(useRickAndMortyDataReducer, initialState)

  function getPreviousPage() {
    if (state.meta.prev) {
      fetchData(state.meta.prev, dispatch, normalizeCharacters)
    }
  }

  function getNextPage() {
    fetchData(state.meta.next, dispatch, normalizeCharacters)
  }

  useEffect(() => {
    function fetchRickAndMortyData() {
      const url = 'https://rickandmortyapi.com/api/character'
      const parsedUrl = url.concat(searchTerm ? `/?name=${searchTerm}` : '')
      const encodedUrl = encodeURI(parsedUrl)

      fetchData(encodedUrl, dispatch, normalizeCharacters)
    }

    fetchRickAndMortyData(searchTerm, dispatch)
  }, [searchTerm])

  return {
    data: {
      meta: {
        isLoading: state.meta.isLoading,
        error: state.meta.error,
        hasPrevious: !!state.meta.prev,
        hasNext: !!state.meta.next,
      },
      characters: state.data.characters,
    },
    api: {
      getPreviousPage,
      getNextPage,
    },
  }
}

export default useRickAndMortyData
