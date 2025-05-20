import { useQuery } from '@tanstack/react-query'
import { headingStyles } from './About.styles'
import { planetsStyles, planetList, planetItem } from './Planets.styles'
import { getPlanets } from '../api'
import type { Planet } from '../types'

export function Planets() {
  const {
    data: planets = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['planets'],
    queryFn: getPlanets,
  })

  if (isLoading) {
    return <div className={planetsStyles}>Loading...</div>
  }

  if (error) {
    return <div className={planetsStyles}>Error: {error.message}</div>
  }

  return (
    <div className={planetsStyles}>
      <h1 className={headingStyles}>Star Wars Planets</h1>
      <ul className={planetList}>
        {planets.map((planet: Planet) => (
          <li key={planet.url} className={planetItem}>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
