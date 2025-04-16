import { personsStyles, headingStyles, sectionStyles } from './Persons.styles'

export function Persons() {
  return (
    <div className={personsStyles}>
      <h1 className={headingStyles}>Persons</h1>

      <section className={sectionStyles}>
        <h2>Person List</h2>
        <p>Here you can view and manage the list of persons.</p>
      </section>

      <section className={sectionStyles}>
        <h2>Add New Person</h2>
        <p>Use the form below to add a new person to the system.</p>
      </section>

      <section className={sectionStyles}>
        <h2>Manage Persons</h2>
        <p>Edit or remove existing persons from the system.</p>
      </section>
    </div>
  )
}
