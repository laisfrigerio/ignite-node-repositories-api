# repositories-api

A NodeJS API to management projects/repositories.

The main idea of this challenge is to refactor an application that is already developed and has integration tests tests it.

After some changes in the application code, part of the tests failed and now only you can solve this problem. Let's go there? 🚀

This application performs CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) of project repositories. In addition, it is possible to give likes to registered repositories, increasing the number of likes by 1 each time the route is called.

## 🛠️ Stack

- nodejs: 18 + express
- jest
- supertest
- docker

### Docker version

We develop this project with the following docker version: `20.10.22`

## :pencil: Features

- :ballot_box_with_check: Create a repository
- :ballot_box_with_check: Edit a repository
- :ballot_box_with_check: Delete a repository
- :ballot_box_with_check: Add a new like
- :ballot_box_with_check: Get all repositories

## :gem: Run application

```
    npm run docker:build
    npm run docker:run
```

- Open a browser and type the following URL: `http://localhost:49129`

## :gem: Run tests

```
    npm run docker:build
    npm run docker:test
```

## :gem: Prettier

```
    npm run prettier:fix
```

## :woman: Author

[@laisfrigerio](https://instagram.com/laisfrigerio/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details
