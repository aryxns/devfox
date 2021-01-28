import React from "react";
import firebase from '../firebase';
import Header from "./header";


function Read(props) {
    const { content } = props.location
    const username = localStorage.getItem('username')
    const [postAnswers, setpostAnswers] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [mypoints, setmyPoints] = React.useState(0)

    function getUserPoints() {
      const db = firebase.firestore()
      const data = db.collection("Users").doc(username)
      data.get().then(function(doc){setmyPoints(doc.data().points)})
    }

    function fetchData() {
      const db = firebase.firestore()
      const data = db.collection("Posts").doc(content.heading)
      data.get().then(function(doc) {
        setpostAnswers(doc.data().answers)
    })
      //setPost(fetchedData.data())
    }

  function PostAnswer(arg) {
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    const db = firebase.firestore()
    db.collection("Posts").doc(content.heading).update({
      answers: arrayUnion(arg)
    }).then(function() {
      db.collection("Users").doc(username).update({
        points: mypoints + 1
      })
    })
  }

    return(
      <div>
        <Header/>
        {fetchData()}
        {getUserPoints()}
        <div className="font-mono text-white h-full max-w max-h mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
            <h1 className="text-2xl">{content.heading}</h1>
            <p className="text-xl text-gray-500">{content.author}</p>
            <br/>
            <p className="text-xl text-gray-300">{content.content}</p>
            <br/>
        </div>
        <div class="font-mono text-white h-full max-w max-h mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
          <p className="text-2xl">answers</p>
          <br/>
          {postAnswers.map(ans => (
            <div>
            <p className="text-lg text-gray-300">{ans}</p>
            <br/>
            </div>
          ))}
          <br/>
          <p className="text-white text-2xl">add your answer</p>
          <div>
          <textarea className="text-black pl-1 rounded-sm w-4/5 border-black float-left" value={answers} onChange={e => setAnswers(e.target.value)}></textarea>
          <button className="ml-5 h-12 rounded-sm text-black bg-green-300 p-2" onClick={() => PostAnswer(answers)}>Submit</button>
          </div>
        </div>
        </div>
    )
}

export default Read;