import React from "react";
import firebase from "../firebase"

function Login() {
    const [username, setUsername] = React.useState("");
    const [upass, setUpass] = React.useState("");
    function onUpdate() {
      const db = firebase.firestore()
      var docRef = db.collection("Users").doc(username);
      docRef.get().then(function(doc) {
        if (doc.data().password === upass) {
          console.log("Successful")
          localStorage.setItem('username', username)
          window.location.href = "/home"
        } else {
          console.log("Unsuccessful")
        }        
    })
    }

    return(
    <div>
    <div className="mb-6 font-mono lowercase max-w-md h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center">
        <br/>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Username</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={username} onChange={e => setUsername(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Password</label>
    <input class="border py-2 px-3 text-grey-darkest" type="password" name="first_name" id="first_name" value={upass} onChange={e => setUpass(e.target.value)}/>
  </div>
    <button class="block bg-green-500 text-white hover:bg-teal-dark uppercase text-lg mx-auto p-4 rounded" onClick={onUpdate} type="submit">Boom!</button>
    </div>
</div>
    )
}

export default Login;