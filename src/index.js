const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

let repositories = [];

const findRepositoryByID = (request, response, next) => {
  const { id } = request.params;

  const repository = repositories.find((repository) => repository.id === id);

  if (!repository) {
    return response.status(404).json({ error: "Repository not found" });
  }

  request.repository = repository;
  return next();
};

app.get("/repositories", (_, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.status(201).json({ ...repository });
});

app.put("/repositories/:id", findRepositoryByID, (request, response) => {
  const { repository } = request;
  const { title, url, techs } = request.body;

  repository.title = title;
  repository.url = url;
  repository.techs = techs;

  return response.status(200).json(repository);
});

app.delete("/repositories/:id", findRepositoryByID, (request, response) => {
  const { id } = request.params;

  repositories = repositories.filter((repository) => repository.id !== id);

  return response.status(204).send();
});

app.post("/repositories/:id/like", findRepositoryByID, (request, response) => {
  const { repository } = request;

  ++repository.likes;

  return response.json({ ...repository });
});

module.exports = app;
