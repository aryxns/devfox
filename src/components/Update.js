import React from "react";
import firebase from '../firebase'

const UserInput = () => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(name, username)

  const onUpdate = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    const db = firebase.firestore()
    db.collection("Users").doc(username).set({
      name: name,
      points: 0,
      password: password,
      unTasks: [],
      finTasks: []
  })
  .then(function() {
      console.log("Document successfully written!");
      window.location.href = "/account_sucess"
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  return (
    <div>
    <div class="mb-6 font-mono lowercase max-w-md h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center ">
    <br/>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Name</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={name} onChange={e => setName(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Unique Username</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={username} onChange={e => setUsername(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Password</label>
    <input class="border py-2 px-3 text-grey-darkest" type="password" name="first_name" id="first_name" value={password} onChange={e => setPassword(e.target.value)}/>
  </div>
  <button class="block bg-green-500 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" onClick={onUpdate} type="submit">Create Account</button>
  <br/>
</div>
</div>
  );
};

export default UserInput;