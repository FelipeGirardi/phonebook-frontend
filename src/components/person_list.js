const Persons = ({personsToShow, confirmDelete}) =>
  <ul>
    {personsToShow.map(person => <Person key={person.id} person={person} confirmDelete={confirmDelete} />)}
  </ul>

const Person = ({person, confirmDelete}) => {
  return <div>
    <li>{person.name} {person.number} <button onClick={() => confirmDelete(person)}>delete</button></li>
  </div>
}

export default Persons