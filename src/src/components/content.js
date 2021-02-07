import React from "react";
import firebase from '../firebase';
import {Link} from "react-router-dom";
import Header from "./header";

function Content() {
    const [posts, setPosts] = React.useState([])
    const username = localStorage.getItem('username')
    React.useEffect(() => {
    const fetchData = async() => {
      const db = firebase.firestore()
      const data = await db.collection("Posts").get()
      setPosts(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])


    return(
        <div>
        <Header/>  
        <Link to={{ pathname: '/home', aboutProps: {
      name: username
    }}}><button className="text-white text-xl mx-auto ml-10 mt-8 bg-gray-500 p-2">Back</button></Link>
        <h1 className="text-2xl mx-auto ml-60 w-50 align-center"><span className="p-2 bg-gray-900 font-mono text-white">Ask fellow developers questions and engage with the community. All of this, while earning points.</span></h1>
        <div className="font-mono h-full max-w max-h mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
            <h1 className="text-2xl font-bold text-white float-left">Community Qs</h1>
            <button className="text-l text-white float-right bg-blue-900 p-2 rounded-lg"><a href="/write">Ask Question</a></button>
            <br/>
            <br/>
            {posts.map(post => (
                <div className="font-mono w-50 max-h mx-16 p-6 bg-gray-200 mt-8 rounded-lg shadow-xl align-text-center">
                    <h1 className="text-xl">{post.heading}</h1>
                    <p className="text-lg text-gray-500 float-left">{post.author}</p><button className="float-right bg-green-300 p-1 rounded-lg">
                    <Link to={{ pathname: '/read', content: post}}>Solve</Link>
                        </button>
                    <br/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Content;