import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Person from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const nameToShow = search
    ? persons.filter((person) => person.name.toLowerCase().includes(search))
    : persons;

  const addPhonebook = (event) => {
    event.preventDefault();
    const newNameObject = { name: newName, number: newNumber };
    const isDuplicate = persons.some(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "") ===
        newName.toLowerCase().replace(/\s+/g, ""),
    );
    if (!isDuplicate) {
      setPersons(persons.concat(newNameObject));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter callback={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPhonebook}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
        valueName={newName}
        valueNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Person data={nameToShow} />
    </div>
  );
};

export default App;
