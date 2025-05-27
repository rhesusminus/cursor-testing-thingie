import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Planets } from './Planets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as api from '../api'
import type { Planet } from '../types'

// Mock the API module
vi.mock('../api', () => ({
  getPlanets: vi.fn(),
}))

export default describe('Planets Component', () => {
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
    vi.mocked(api.getPlanets).mockImplementation(() => new Promise(() => {}))

    render(
      <QueryClientProvider client={queryClient}>
        <Planets />
      </QueryClientProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays error message when API call fails', async () => {
    // Mock API to throw an error
    const errorMessage = 'Failed to fetch planets'
    vi.mocked(api.getPlanets).mockRejectedValue(new Error(errorMessage))

    render(
      <QueryClientProvider client={queryClient}>
        <Planets />
      </QueryClientProvider>
    )

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
    })
  })

  it('displays list of Star Wars planets when API call succeeds', async () => {
    // Mock API to return sample data
    const mockPlanets: Planet[] = [
      {
        name: 'Tatooine',
        climate: 'arid',
        terrain: 'desert',
        population: '200000',
        url: 'https://swapi.dev/api/planets/1/',
      },
      {
        name: 'Alderaan',
        climate: 'temperate',
        terrain: 'grasslands, mountains',
        population: '2000000000',
        url: 'https://swapi.dev/api/planets/2/',
      },
    ]

    vi.mocked(api.getPlanets).mockResolvedValue(mockPlanets)

    render(
      <QueryClientProvider client={queryClient}>
        <Planets />
      </QueryClientProvider>
    )

    // Check heading is displayed
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { level: 1, name: 'Star Wars Planets' })
      ).toBeInTheDocument()
    })

    // Check planets are displayed
    expect(screen.getByText('Tatooine')).toBeInTheDocument()
    expect(screen.getByText('Alderaan')).toBeInTheDocument()
    expect(screen.getByText('Climate: arid')).toBeInTheDocument()
    expect(screen.getByText('Terrain: desert')).toBeInTheDocument()
    expect(screen.getByText('Population: 200000')).toBeInTheDocument()

    // Check that API was called correctly
    expect(api.getPlanets).toHaveBeenCalledTimes(1)
  })

  it('renders the correct number of planet items', async () => {
    // Mock API to return sample data
    const mockPlanets: Planet[] = Array.from({ length: 5 }, (_, i) => ({
      name: `Planet ${i + 1}`,
      climate: 'temperate',
      terrain: 'varied',
      population: '1000000',
      url: `https://swapi.dev/api/planets/${i + 1}/`,
    }))

    vi.mocked(api.getPlanets).mockResolvedValue(mockPlanets)

    render(
      <QueryClientProvider client={queryClient}>
        <Planets />
      </QueryClientProvider>
    )

    // Wait for the content to load
    await waitFor(() => {
      expect(screen.getByText('Planet 1')).toBeInTheDocument()
    })

    // Check that the correct number of items is rendered
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(mockPlanets.length)
  })
})
