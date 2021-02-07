import React from "react";
import firebase from "../firebase";
import Header from "./header";

function WriteUpdate() {
    const [author, setAuthor] = React.useState("")
    const username = localStorage.getItem('username')
    const [heading, setHeading] = React.useState("")
    const [content, setContent] = React.useState("")
    const [points, setPoints] = React.useState(0)
    React.useEffect(() => {
        const getAuthor = async() => {
          const db = firebase.firestore()
          const data = db.collection("Users").doc(username);
          data.get().then(function(doc) {
            setAuthor(doc.data().name)
            setPoints(doc.data().points)
          })
        }
        getAuthor()
      }, [username])

      const onUpdate = () => {
        const db = firebase.firestore()
        db.collection("Daily").doc(heading).set({
          author: author, 
          heading: heading,
          upvotes: 1,
          content: content
      })
      .then(function() {
          console.log("Post successfully written!");
          window.location.href = "/update_success"
      }).then(function() {
          db.collection("Users").doc(username).update({
              points: points + 5
          })
      })
    }
    return(
        <div>
        <Header />
        <div class="mb-6 font-mono lowercase w-1/2 h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center ">
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Title</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={heading} onChange={e => setHeading(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Update (Limit: 300 characters)</label>
    <textarea maxlength="300" class="border py-2 px-3 h-96 text-grey-darkest" type="text-area" name="first_name" id="first_name" value={content} onChange={e => setContent(e.target.value)}/>
  </div>
  <button class="block bg-green-500 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" onClick={onUpdate} type="submit">POST</button>
        </div>
        </div>
    )
}

export default WriteUpdate;