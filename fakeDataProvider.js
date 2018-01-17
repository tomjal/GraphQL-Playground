const playersSample = [
  {
    id: 1,
    gameRoomId: 1,
    nickname: 'janKow',
  },
  {
    id: 2,
    gameRoomId: 1,
    nickname: 'marNow',
  },
  {
    id: 3,
    gameRoomId: 1,
    nickname: 'annBro',
  }
];

const gameRoomsSample = [
  {
    id: 1,
    gameName: "Quake"
  }
];

class FakeDataProvider {
  constructor() {
    this.playersData = [...playersSample];
    this.gameRoomsData = [...gameRoomsSample];
  }
  addGameRoom(name) {
    const newGameroom = {
      id: this.gameRoomsData.length + 1,
      gameName: name
    };
    this.gameRoomsData.push(newGameroom);
    return newGameroom;
  }
}

export const fakeDataProvider = new FakeDataProvider();