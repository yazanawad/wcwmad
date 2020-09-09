import firebase from "@firebase/app";
require("firebase/auth");
require("firebase/database");

export const addSchoolToFirebase = (SName, SState, SCity, SPassword) => {
  firebase
    .database()
    .ref("/schools/" + SName)
    .set({
      name: SName,
      state: SState,
      city: SCity,
      password: SPassword,
    });
};
