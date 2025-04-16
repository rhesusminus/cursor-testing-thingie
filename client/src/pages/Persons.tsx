import { useQuery } from '@tanstack/react-query'
import { getAllPeople } from '../api'
import { personsStyles, personList, personItem } from './styles/persons.styles'

export function Persons() {
  const {
    data: people,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['people'],
    queryFn: getAllPeople,
  })

  if (isLoading) return <div className={personsStyles}>Loading...</div>
  if (error) return <div className={personsStyles}>Error: {error.message}</div>

  return (
    <div className={personsStyles}>
      <h1>Star Wars Characters</h1>
      <ul className={personList}>
        {people?.map((person) => (
          <li key={person.url} className={personItem}>
            <h2>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
