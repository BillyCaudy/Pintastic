```js
{
  entities: {
    users: {
      0: {
        id: 0,
        username: "siouxsie_sioux",
        boardIds: [1, 3],  
        pinIds: [],
        followIds: [],
        imgUrl: "https://en.wikipedia.org/wiki/Siouxsie_Sioux#/media/File:Sioux-edinburgh80.jpg"      
      },
      1: {
        id: 1,
        username: "robert_smith",
        boardIds: [2],
        pinIds: [],
        followIds: []
        imgUrl: "https://en.wikipedia.org/wiki/Robert_Smith_(singer)#/media/File:Robert_Smith_(musician)_crop.jpg"
      }
    },
    boards: {
      1: {
        id: 1,
        makerId: 11,
        name: "name",
        description: "descriptive",
      },
      2: {
        id: 2,
        makerId: 25,
        name: "name",
        description: "descriptive",
      },
      3: {
        id: 3,
        makerId: 11,
        name: "name",
        description: "descriptive",
      }
    },
    pins: {
      1: {
        id: 1,
        makerId: 11,
        boardId: 42,
        description: "",
      },
      2: {
        id: 2,
        makerId: 25,
        boardId: 42,
        description: "",
      },
      3: {
        id: 3,
        makerId: 11,
        boardId: 42,
        description: "",
      }
    },
    boardFollows: {
      10: {
        boardId: 11,
        followerId: 1,
      },
      11: {
        boardId: 25,
        followerId: 1,
      },
      12: {
        boardId: 25,
        followerId: 3,
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Chirp body cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```