import type { Person, Planet } from './types'

const apiUrl = 'https://swapi.dev/api'

import { mockPeople } from './mocks'

// Environment variable or configuration to control using mocks
// SWAPI isnt't working correctly, so we are using mocks
const useMocks = true

const getPeople = async (id: number): Promise<Person> => {
  if (useMocks) {
    const person = mockPeople.find((p) => p.url === `${apiUrl}/people/${id}/`)
    if (!person) {
      throw new Error('Person not found')
    }

    return person
  }
  const response = await fetch(`${apiUrl}/people/${id}`)

  return response.json()
}

const getAllPeople = async (): Promise<Person[]> => {
  if (useMocks) {
    return mockPeople
  }

  const response = await fetch(`${apiUrl}/people`)
  const data = await response.json()

  return data.results
}

const getPlanet = async (id: number): Promise<Planet> => {
  const response = await fetch(`${apiUrl}/planets/${id}`)

  return response.json()
}

export { getPeople, getPlanet, getAllPeople }
