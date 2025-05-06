import type { Planet, Person } from './types'

export async function getPlanets(): Promise<Planet[]> {
  const response = await fetch('https://swapi.dev/api/planets/')
  const data = await response.json()
  return data.results
}

export async function getPlanetById(id: number): Promise<Planet> {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`)
  return response.json()
}

export async function getPersonById(id: number): Promise<Person> {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`)
  return response.json()
}

export async function getPeople(): Promise<Person[]> {
  const response = await fetch('https://swapi.dev/api/people/')
  const data = await response.json()
  return data.results
}
