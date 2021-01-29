import React from "react";
import firebase from "../firebase";
import Header from "./header"

function Tasks(props) {
    const username = (props.location.aboutProps.name)
    const [task, setTask] = React.useState("")
    const [todo, setTodo] = React.useState([])
    const [TasksDone, setTasksDone] = React.useState([])
    const [displayPoints, setdisplayPoints] = React.useState(0)
    const tasksDone = TasksDone.slice(0, 5)
    console.log(tasksDone)  
    function fetchData() {
        const db = firebase.firestore()
        var docRef = db.collection("Users").doc(username);
        docRef.get().then(function(doc) {
            console.log(doc.data().name)
            setdisplayPoints(doc.data().points)
            setTodo(doc.data().unTasks)
            setTasksDone(doc.data().finTasks)
        })
    };
    function taskDone(arg) {
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
        const db = firebase.firestore()
        db.collection("Users").doc(username).update({
            unTasks: arrayRemove(arg),
            finTasks: arrayUnion(arg),
            points: displayPoints + 10
        })
        .then(function() {
            console.log("Document successfully written!");
            fetchData()
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        };
    function addTask(arg) {
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const db = firebase.firestore()
        db.collection("Users").doc(username).update({
            unTasks: arrayUnion(arg)
        })
        .then(function() {
            console.log("Document successfully written!");
            fetchData()
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
    });
}
    return(
        <div>
            <Header /> 
            {fetchData()}
            <br/>
            <div class="font-mono mt-8 text-white w-40 rounded-100 shadow-xl align-center items-center mx-auto">
                <h3 className="text-3xl mx-auto">Score:<span className="p-1 bg-green-500 rounded-lg">{displayPoints}</span></h3>
            </div>
            <br/>
        <div class="mb-6 font-mono w-3/4 lowercase h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center ">
            <div>
                <div>
                    <input placeholder="Enter task here..." className="h-10 rounded p-3 w-5/6" value={task} onChange={e => setTask(e.target.value)}></input>
                    <button className="ml-5 bg-green-300 p-2 border-black rounded-lg text-sm w-1/12" onClick={() => addTask(task)}>Add</button>
                </div>
            </div>
  </div>
  <div className="font-mono h-full mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
        <h1 className="text-2xl font-bold text-white">Dev Tasks</h1>
        {todo.map(item => (
                <div className="font-mono w-50 max-h mx-16 p-6 bg-gray-200 mt-8 rounded-lg shadow-xl align-text-center">
                    <h1 className="text-xl float-left">{item}</h1>
                    <div className="float-right">
                    <button className="bg-gray-700 p-1 rounded-lg text-white" onClick={() => taskDone(item)}>Done</button>
                    </div>
                    <br/>
                </div>
            ))}
    </div>
    <div className="font-mono h-full mx-16 p-6 bg-gray-900 mt-16 rounded-lg shadow-xl align-text-center">
    <h1 className="text-2xl font-bold text-white">Latest Completed Tasks</h1>
    {tasksDone.map(done => (
                <div className="font-mono w-50 max-h mx-16 p-6 bg-gray-200 mt-8 rounded-lg shadow-xl align-text-center">
                    <strike className="text-xl float-left">{done}</strike>
                    <br/>
                </div>
            ))}
    </div>
  </div>
    )
}

export default Tasks;
