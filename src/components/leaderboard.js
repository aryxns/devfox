import React from "react";
import firebase from '../firebase';
import {Link} from "react-router-dom";
import Header from "./header";

function Leaderboard() {
    const [points, setPoints] = React.useState([])
    const [users, setUsers] = React.useState([])
    const username = localStorage.getItem('username')
    React.useEffect(() => {
        const fetchData = async() => {
          const db = firebase.firestore()
          const data = await db.collection("Users").get()
          setPoints(data.docs.map(doc => doc.data().points))
          setUsers(data.docs.map(doc => doc.data()))
        }
        fetchData()
      }, [])
      console.log(points)
    return(
        <div>
        <Header/>  
        <Link to={{ pathname: '/home', aboutProps: {
      name: username
    }}}><button className="text-white text-xl mx-auto ml-10 mt-8 bg-gray-500 p-2">Back</button></Link>
        <div className="font-mono h-full max-w max-h mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
            <h1 className="text-2xl font-bold text-white float-left">Leaderboard</h1>
            <br/>
            <br />
            {users.map(user => (
              <div className="font-mono w-50 h-20 mx-16 p-6 bg-gray-200 mt-8 rounded-lg shadow-xl align-text-center">
              <div className="text-xl float-left">
              <h1>{user.name}</h1>
              <h1 className="text-sm text-gray-500">Tasks:{user.finTasks.length}</h1>
              </div>  
              <h1 className="text-xl float-right bg-green-300 p-1">{user.points}</h1>
              </div>
            )
            )}
            <br/>
            <br/>
        </div>
        </div>
    )
}

export default Leaderboard;