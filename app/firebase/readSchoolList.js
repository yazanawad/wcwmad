import firebase from "@firebase/app";
require("firebase/auth");
require("firebase/database");

export default readSchoolList = () => {
  let x = [];
  firebase
    .database()
    .ref("schools/")
    .on("child_added", (snapshot) => {
      x.push(snapshot.key);
    });
  return x;
};
