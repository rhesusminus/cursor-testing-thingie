import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Persons } from './Persons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as api from '../api'
import type { Person } from '../types'

// Mock the API module
vi.mock('../api', () => ({
  getPeople: vi.fn(),
}))

describe('Persons Component', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
    // Reset mock before each test
    vi.resetAllMocks()
  })

  it('displays loading state initially', () => {
    // Mock API to return a promise that never resolves to keep loading state
    vi.mocked(api.getPeople).mockImplementation(() => new Promise(() => {}))

    render(
      <QueryClientProvider client={queryClient}>
        <Persons />
      </QueryClientProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays error message when API call fails', async () => {
    // Mock API to throw an error
    const errorMessage = 'Failed to fetch people'
    vi.mocked(api.getPeople).mockRejectedValue(new Error(errorMessage))

    render(
      <QueryClientProvider client={queryClient}>
        <Persons />
      </QueryClientProvider>
    )

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
    })
  })

  it('displays list of Star Wars characters when API call succeeds', async () => {
    // Mock API to return sample data
    const mockPeople: Person[] = [
      {
        name: 'Luke Skywalker',
        url: 'https://swapi.dev/api/people/1/',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
      },
      {
        name: 'Darth Vader',
        url: 'https://swapi.dev/api/people/4/',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:18:20.704000Z',
        edited: '2014-12-20T21:17:50.313000Z',
      },
    ]

    vi.mocked(api.getPeople).mockResolvedValue(mockPeople)

    render(
      <QueryClientProvider client={queryClient}>
        <Persons />
      </QueryClientProvider>
    )

    // Check heading is displayed
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { level: 1, name: 'Star Wars Characters' })
      ).toBeInTheDocument()
    })

    // Check characters are displayed
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByText('Darth Vader')).toBeInTheDocument()

    // Check that API was called correctly
    expect(api.getPeople).toHaveBeenCalledTimes(1)
  })

  it('renders the correct number of list items', async () => {
    // Mock API to return sample data
    const mockPeople: Person[] = Array.from({ length: 5 }, (_, i) => ({
      name: `Character ${i + 1}`,
      url: `https://swapi.dev/api/people/${i + 1}/`,
      height: '180',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '20BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
    }))

    vi.mocked(api.getPeople).mockResolvedValue(mockPeople)

    render(
      <QueryClientProvider client={queryClient}>
        <Persons />
      </QueryClientProvider>
    )

    // Wait for the content to load
    await waitFor(() => {
      expect(screen.getByText('Character 1')).toBeInTheDocument()
    })

    // Check that the correct number of items is rendered
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(mockPeople.length)
  })
})
