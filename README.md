<div align="center">

  ### GraphQL + Apollo + ExpressJs

</div>

<div align="center">

![](https://img.shields.io/badge/Maintained%3F-No-brightgreen.svg)

</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <a href="#getting-started">Getting Started</a>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#example">Example</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

This project contains a CRUD that you could used in Apollo Studio, it manage Task, each Task contains title and description


## Getting Started

Install the dependencies:

```sh
$ npm install
// or
$ yarn
```

Run in dev mode:

```sh
$ npm run dev
// or 
$ yarn dev 
```

### Built With
- Patience
- [GraphQl](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs/apollo-server/)
- [ExpressJs](https://expressjs.com/)


1. Fork the project

2. Clone the repository

```bash
git clone https://github.com/@username/apollo-gql
```

3. Create your Feature Branch

```bash
git checkout -b feature/newFeature
```

4. Push to the Branch

```bash
git push origin feature/newFeature
```

5. Open a Pull Request


## Example
Get Tasks:
```javascript
query {
  getAllTasks {
    id
    title 

  }
}
```

Create new Task:
```javascript
mutation {
  createTask (
    task: {
    title: "New task", 
    description: "My new task"
    })
    {
      id
      title
      description
    } 
  }
}
```

Get Task by id:
```javascript
query {
  getTask (id: "62b9d43a1adaa5b4efb91819") {
    id
    title
    description
  }
}
```

Update Task by id:
```javascript
mutation {
  updateTask(id: "62b9044d182e0440cb9939f9"
  task:{
    title: "edited task"
    description: "task was edited"
  } ) {
    id
    title
    description
  }
}
```

Delete Task:
```javascript
mutation{
  deleteTask(id: "62b8f7e136de7e647d6c41d2")
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
