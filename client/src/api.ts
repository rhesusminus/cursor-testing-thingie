const apiUrl = 'https://swapi.dev/api'

export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

const getPeople = async (id: number): Promise<Person> => {
  const response = await fetch(`${apiUrl}/people/${id}`)

  return response.json()
}

const getAllPeople = async (): Promise<Person[]> => {
  const response = await fetch(`${apiUrl}/people`)
  const data = await response.json()
  return data.results
}

const getPlanet = async (id: number): Promise<Planet> => {
  const response = await fetch(`${apiUrl}/planets/${id}`)

  return response.json()
}

export { getPeople, getPlanet, getAllPeople }
