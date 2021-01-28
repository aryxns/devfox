import React from "react";
import firebase from '../firebase';
import Header from "./header";

function Writer() {
    const [author, setAuthor] = React.useState("");
    const [heading, setHeading] = React.useState("");
    const [content, setContent] = React.useState("");

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection("Posts").add({
          author: author, 
          heading: heading,
          content: content,
          answers: []
      })
      .then(function() {
          console.log("Post successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }

    return(
      <div>
        <Header />
        <div class="mb-6 font-mono lowercase w-1/2 h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center ">
            <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Author</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={author} onChange={e => setAuthor(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Heading</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" value={heading} onChange={e => setHeading(e.target.value)}/>
  </div>
  <div class="flex flex-col mb-4 ">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="first_name">Content</label>
    <textarea  class="border py-2 px-3 h-96 text-grey-darkest" type="text-area" name="first_name" id="first_name" value={content} onChange={e => setContent(e.target.value)}/>
  </div>
  <button class="block bg-green-500 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" onClick={onUpdate} type="submit">POST</button>
        </div>
        </div>
    )
}

export default Writer;