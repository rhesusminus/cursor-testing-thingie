import type { Person, Planet } from './types'

const getPersonById = async (id: number): Promise<Person> => {
  const response = await fetch(`/api/api/people/${id}.json`)
  return response.json()
}

const getPeople = async (): Promise<Person[]> => {
  const response = await fetch('/api/api/people/all.json')
  const data = await response.json()
  return data
}

const getPlanetById = async (id: number): Promise<Planet> => {
  const response = await fetch(`/api/api/planets/${id}.json`)
  return response.json()
}

export { getPersonById, getPlanetById, getPeople }
