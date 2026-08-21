require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const Contact = require("./models/contact");

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(express.json());
app.use(express.static("dist"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body"),
);
app.use(cors());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  Contact.find({}).then((data) => res.json(data));
});

app.get("/info", (req, res) => {
  const date = new Date().toString();
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const findPerson = persons.find((person) => person.id === id);
  return findPerson
    ? res.json(findPerson)
    : res.status(404).json({
        error: "cant find person information",
      });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id !== id);
  res.status(200).end();
});

app.post("/api/persons", (req, res) => {
  const data = req.body;
  const findPerson = persons.find((person) => person.name === data.name);
  const maxId = Math.max(...persons.map((person) => Number(person.id)));

  if (!data.name || !data.number) {
    return res.status(403).json({
      error: "name or number must be filled",
    });
  }
  // else if (findPerson) {
  //   return res.status(403).json({
  //     error: "name already exists in the phonebook",
  //   });
  // }

  const newPerson = new Contact({
    name: data.name,
    number: data.number,
  });

  newPerson.save().then((data) => {
    res.json(data);
  });
});

app.put("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const findPerson = persons.find((person) => person.id === id);
  const updatePerson = { ...findPerson, number: data.number };
  persons = persons.map((person) =>
    person.id === req.params.id ? updatePerson : person,
  );
  res.json(updatePerson);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("listening on port 3001");
});

module.exports = app;
