import React from "react";
import firebase from "../firebase";
import {Link} from "react-router-dom";
import Header from "./header";

function DailyUpdates() {
    const [updates, setUpdates] = React.useState([])
    const username = localStorage.getItem('username')
    React.useEffect(() => {
    const fetchData = async() => {
      const db = firebase.firestore()
      const data = await db.collection("Daily").get()
      setUpdates(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

  const fetchData = async() => {
    const db = firebase.firestore()
    const data = await db.collection("Daily").get()
    setUpdates(data.docs.map(doc => doc.data()))
  }

  function UpdateUpvotes(arg) {
      const db = firebase.firestore()
      const data = db.collection("Daily").doc(arg)
      data.get().then(function(doc) {
        const currentV = doc.data().upvotes
        data.update({
          upvotes: currentV + 1
        }).then(fetchData())
      })
    }

 return(
    <div>
    <Header/>  
    <Link to={{ pathname: '/home', aboutProps: {
  name: username
}}}><button className="text-white text-xl mx-auto ml-10 mt-8 bg-gray-500 p-2">Back</button></Link>
    <h1 className="text-2xl mx-auto ml-80 w-50 align-center rounded-lg"><span className="p-2 bg-gray-900 rounded-lg shadow-2xl font-mono text-white">Post tweet-like daily updates to maintain public accountability and earn points</span></h1>
    <div className="font-mono h-full max-w max-h mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
        <h1 className="text-2xl font-bold text-white float-left">Daily Updates</h1>
        <button className="text-l text-white float-right bg-blue-900 p-2 rounded-lg"><a href="/write_update">Write Update</a></button>
        <br/>
        <br/>
        {updates.map(update => (
            <div className="font-mono w-50 h-24 mx-16 p-6 bg-gray-200 mt-8 rounded-lg shadow-xl align-text-center">
                <div className="float-left">
                <h1 className="text-lg">{update.heading} <span className="text-sm text-gray-600">({update.author})</span></h1>
                <p className="mt-1 text-sm">{update.content}</p>     
                </div>           
                <div className="float-right">
                <p className="text-lg text-green-600 font-bold">{update.upvotes}</p>
                <button onClick={() => UpdateUpvotes(update.heading)}><span className="bg-green-300 text-black">Upvote</span></button>
                </div>
            </div>
        ))}
    </div>
    </div>
 )   
}

export default DailyUpdates;