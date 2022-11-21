const admin = require("firebase-admin");

var serviceAccount = require("./loud-d3eb3-firebase-adminsdk-x5kq6-8cff5cfff7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://loud-d3eb3-default-rtdb.europe-west1.firebasedatabase.app"
});
const faker = require("faker");
const db = admin.firestore();
const fakeIt = () => {
 return db.collection("Music").add({
   username: faker.internet.userName(),
   email: faker.internet.email(),
   avatar: faker.internet.avatar(),
});
};
Array(5).fill(0).forEach(fakeIt);