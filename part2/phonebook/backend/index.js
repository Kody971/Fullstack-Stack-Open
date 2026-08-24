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

  Contact.countDocuments({}).then((count) =>
    res.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`),
  );
});

app.get("/api/persons/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then((data) => {
      return data
        ? res.json(data)
        : res.status(404).json({
            error: "cant find person information",
          });
    })
    .catch((err) => next(err));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).end();
    })
    .catch((err) => next(err));
});

app.post("/api/persons", (req, res, next) => {
  const data = req.body;

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

  newPerson
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
});

app.put("/api/persons/:id", (req, res, next) => {
  const { name, number } = req.body;

  Contact.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).end();
      }

      data.name = name;
      data.number = number;

      return data.save().then((updatedData) => {
        res.json(updatedData);
      });
    })
    .catch((err) => next(err));
});

const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).send({ error: "malformatted" });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  next(err);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("listening on port 3001");
});

module.exports = app;
