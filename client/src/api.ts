import type { Planet, Person } from './types'

export async function getPlanets(): Promise<Planet[]> {
  const response = await fetch('/api/api/planets/all.json')
  const data = await response.json()
  return data
}

export async function getPlanetById(id: number): Promise<Planet> {
  const response = await fetch(`/api/api/planets/${id}.json`)
  return response.json()
}

export async function getPersonById(id: number): Promise<Person> {
  const response = await fetch(`/api/api/people/${id}.json`)
  return response.json()
}

export async function getPeople(): Promise<Person[]> {
  const response = await fetch('/api/api/people/all.json')
  const data = await response.json()
  return data
}
