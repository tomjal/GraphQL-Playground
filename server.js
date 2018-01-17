const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type Player { 
    id: Int!, nickname: String 
  }
  type GameRoom { 
    id: Int!, gameName: String, players: [Player]
  }
  type Query { 
    players: [Player]
    gamerooms: [GameRoom]
    player(id: Int!): Player
  }
  type Mutation {
    addGameroom(name: String!): GameRoom
  }
`;

import { fakeDataProvider } from './fakeDataProvider.js';

const resolvers = {
  Query: {
    players: () => fakeDataProvider.playersData,
    gamerooms: () => fakeDataProvider.gameRoomsData,
    player: (_, args) => fakeDataProvider.playersData
      .filter(player => player.id === args.id)[0]
  },
  Mutation: {
    addGameroom: (_, args) => fakeDataProvider.addGameRoom(args.name)
  },
  GameRoom: {
    players: (gameroom) => fakeDataProvider.playersData
      .filter(player => player.gameRoomId === gameroom.id)
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});