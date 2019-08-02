import React from 'react'
import { render, waitForElement, fireEvent } from '__tests__/utils/rtlWrapper'

import { FetchMock, fetchMock } from '@react-mock/fetch'
import HomePage from 'components/pages/Home'

function renderComponent(mockOptions) {
  return render(
    <FetchMock mocks={mockOptions}>
      <HomePage />
    </FetchMock>,
  )
}

describe('Application', () => {
  describe('When application home page is loaded', () => {
    const mockOptions = [
      {
        matcher: 'https://rickandmortyapi.com/api/character',
        method: 'GET',
        response: {
          info: {
            next: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: '',
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
          ],
        },
      },
    ]

    let renderedComponent
    beforeEach(() => {
      renderedComponent = renderComponent(mockOptions)
    })

    it('should render a character list filter cleared', async () => {
      const { getByPlaceholderText } = renderedComponent

      await waitForElement(() => getByPlaceholderText('Enter character name'))

      expect(getByPlaceholderText('Enter character name').value).toBe('')
    })

    it('should render character information as cards', async () => {
      const { getByTestId, getByText, getByAltText } = renderedComponent

      await waitForElement(() => getByTestId('card-1'))

      expect(getByAltText('Rick Sanchez')).toBeDefined()
      expect(getByText('Rick Sanchez')).toBeDefined()
      expect(getByText('Human')).toBeDefined()
      expect(getByText('Earth')).toBeDefined()
    })

    it('should render a disabled [Previous] button', async () => {
      const { getByText } = renderedComponent

      await waitForElement(() => getByText('Previous'))

      expect(getByText('Previous').disabled).toBeTruthy()
    })

    it('should render a enabled [Next] button', async () => {
      const { getByText } = renderedComponent

      await waitForElement(() => getByText('Next'))

      expect(getByText('Next').disabled).toBeFalsy()
    })
  })

  describe('When user tries to interact with characters list via [Previous]/[Next] buttons', () => {
    const mockOptions = [
      {
        matcher: 'https://rickandmortyapi.com/api/character',
        method: 'GET',
        response: {
          info: {
            next: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: '',
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
          ],
        },
      },
      {
        matcher: 'https://rickandmortyapi.com/api/character/?page=2',
        method: 'GET',
        response: {
          info: {
            next: '',
            prev: 'https://rickandmortyapi.com/api/character',
          },
          results: [
            {
              id: 2,
              name: 'Morty Smith',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
          ],
        },
      },
    ]

    let renderedComponent
    beforeEach(() => {
      renderedComponent = renderComponent(mockOptions)
    })

    it('should be able to load previous/next entries of the characters list by using [Previous]/[Next] buttons', async () => {
      const { getByTestId, getByText, getByAltText } = renderedComponent

      await waitForElement(() => getByTestId('card-1'))
      expect(getByAltText('Rick Sanchez')).toBeDefined()
      expect(getByText('Rick Sanchez')).toBeDefined()
      expect(getByText('Human')).toBeDefined()
      expect(getByText('Earth')).toBeDefined()
      expect(getByText('Previous').disabled).toBeTruthy()
      expect(getByText('Next').disabled).toBeFalsy()

      fireEvent.click(getByText('Next'))

      await waitForElement(() => getByTestId('card-2'))
      expect(getByTestId('card-2')).toBeDefined()
      expect(getByText('Morty Smith')).toBeDefined()
      expect(getByAltText('Morty Smith')).toBeDefined()
      expect(getByText('Human')).toBeDefined()
      expect(getByText('Earth')).toBeDefined()
      expect(getByText('Previous').disabled).toBeFalsy()
      expect(getByText('Next').disabled).toBeTruthy()

      fireEvent.click(getByText('Previous'))

      await waitForElement(() => getByTestId('card-1'))
      expect(getByAltText('Rick Sanchez')).toBeDefined()
      expect(getByText('Rick Sanchez')).toBeDefined()
      expect(getByText('Human')).toBeDefined()
      expect(getByText('Earth')).toBeDefined()
      expect(getByText('Previous').disabled).toBeTruthy()
      expect(getByText('Next').disabled).toBeFalsy()
    })
  })

  describe('When user tries to interact with characters list via character list filter', () => {
    const mockOptions = [
      {
        matcher: 'https://rickandmortyapi.com/api/character',
        method: 'GET',
        response: {
          info: {
            next: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: '',
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
            {
              id: 2,
              name: 'Morty Smith',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
            {
              id: 3,
              name: 'Jerry Smith',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
          ],
        },
      },
      {
        matcher: 'https://rickandmortyapi.com/api/character/?name=Smith',
        method: 'GET',
        response: {
          info: {
            next: '',
            prev: '',
          },
          results: [
            {
              id: 2,
              name: 'Morty Smith',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
            {
              id: 3,
              name: 'Jerry Smith',
              species: 'Human',
              origin: { name: 'Earth' },
              image: 'image-url',
            },
          ],
        },
      },
    ]

    let renderedComponent
    beforeEach(() => {
      renderedComponent = renderComponent(mockOptions)
    })

    it('should be able to filter characters list based on what it was entered on character list filter', async () => {
      const { getByTestId, getByPlaceholderText, getByText } = renderedComponent

      await waitForElement(() => getByTestId('card-1'))
      await waitForElement(() => getByTestId('card-2'))
      await waitForElement(() => getByTestId('card-3'))

      const charactersListFilter = getByPlaceholderText('Enter character name')
      const triggerSearchButton = getByText('Show me what you got')
      fireEvent.change(charactersListFilter, { target: { value: 'Smith' } })
      expect(charactersListFilter.value).toBe('Smith')
      fireEvent.click(triggerSearchButton)
      expect(fetchMock.called('https://rickandmortyapi.com/api/character/?name=Smith')).toBeTruthy()

      await waitForElement(() => getByTestId('card-2'))
      await waitForElement(() => getByTestId('card-3'))
    })
  })
})
