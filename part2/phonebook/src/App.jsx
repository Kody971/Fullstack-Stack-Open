import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Person from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notifications";
import appService from "./services/list";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  // render data
  useEffect(() => {
    appService.getAlltData().then((data) => {
      setPersons(data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDeleteData = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      appService
        .deleteData(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)));
    }
  };

  const nameToShow = search
    ? persons.filter((person) => person.name.toLowerCase().includes(search))
    : persons;

  const addPhonebook = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: new String(persons.length + 1),
    };
    const isDuplicate = persons.some(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "") ===
        newName.toLowerCase().replace(/\s+/g, ""),
    );
    if (!isDuplicate) {
      appService.createData(newNameObject).then((theData) => {
        setPersons(persons.concat(theData));
        setNewName("");
        setNewNumber("");
      });
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
      <Person data={nameToShow} callback={handleDeleteData} />
    </div>
  );
};

export default App;
