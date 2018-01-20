# GraphQL-Playground
:construction: WORK IN PROGRESS :construction:

NodeJS/NoSQL + GraphQL + JWT security playground project.

* '*yarn start*' - runs nodemon

Server is running on port 3005

*/graphql* - graphql api endpoint

*/graphiql* - graphiql playground

## Sample commands

```graphql
query gameRoomsWithPlayerNicknames {
  gamerooms {
    gameName,
    players {
      nickname
    }
  }
}

mutation newRoom {
  addGameroom(name: "CounterStrike") {
    gameName
  }
}

query gameRooms {
  gamerooms {
    gameName
  }
}
```
