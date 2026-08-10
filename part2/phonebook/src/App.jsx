import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Person from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notifications";
import appService from "./services/list";
import Country from "./components/Country";
import FindCountries from "./components/FindCountries";
import countriesService from "./services/countries";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notif, setNotif] = useState(null);
  const [isPass, setIsPass] = useState(true);
  const [countries, setCountries] = useState([]);
  const [findCountries, setFindCountries] = useState("");

  // render data
  useEffect(() => {
    appService.getAlltData().then((data) => {
      setPersons(data);
    });
  }, []);

  useEffect(() => {
    countriesService.getAllData().then((response) => {
      setCountries(response);
    });
  }, []);

  // handle data used as callback
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
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setNotif(`Deleted ${name}`);
          setTimeout(() => {
            setNotif(null);
          }, 5000);
        })
        .catch((err) => {
          setIsPass(!isPass);
          setNotif(
            `Information of ${name} has already been removed from server`,
          );
          setTimeout(() => {
            setNotif(null);
            setIsPass(!isPass);
          }, 5000);
        });
    }
  };
  const handleCountriesChange = (event) => {
    setFindCountries(event.target.value);
  };
  const addPhonebook = (event) => {
    event.preventDefault();
    // checking same data
    const isDuplicate = persons.some(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "") ===
        newName.toLowerCase().replace(/\s+/g, ""),
    );

    // process new data
    if (!isDuplicate) {
      const newNameObject = {
        name: newName,
        number: newNumber,
        id: new String(persons.length + 1),
      };
      appService.createData(newNameObject).then((theData) => {
        setPersons(persons.concat(theData));
        setNotif(`Added ${newName}`);
        setNewName("");
        setNewNumber("");
        setTimeout(() => {
          setNotif(null);
        }, 5000);
      });
    }
    // process update data
    else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        // update data when user agree
        const findSameObject = persons.find(
          (person) =>
            person.name.toLowerCase().replace(/\s+/g, "") ===
            newName.toLowerCase().replace(/\s+/g, ""),
        );
        const newUpdateObject = { ...findSameObject, number: newNumber };
        appService
          .updateData(findSameObject.id, newUpdateObject)
          .then((theData) => {
            setPersons(
              persons.map((person) =>
                person.id === newUpdateObject.id ? newUpdateObject : person,
              ),
            );
            setNotif(`Updated ${newName}`);
            setNewName("");
            setNewNumber("");
            setTimeout(() => {
              setNotif(null);
            }, 5000);
          });
      }
    }
  };

  const nameToShow = search
    ? persons.filter((person) => person.name.toLowerCase().includes(search))
    : persons;

  const countriesToShow = findCountries
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(findCountries.toLowerCase()),
      )
    : countries;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification condition={isPass} message={notif} />
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
      <br />
      <br />
      <FindCountries callback={handleCountriesChange} />
      <Country data={countriesToShow} key={findCountries} />
    </div>
  );
};

export default App;
