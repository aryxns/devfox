import React from "react";
import {Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    console.log(username)
    localStorage.setItem('username', username);
    return(
    <div>
    <div className="mb-6 font-mono lowercase max-w-md h-auto p-4 align-center mx-auto mt-10 bg-gray-200 rounded-lg items-center">
        <br/>
  <div class="flex flex-col mb-4">
    <label class="mb-2  font-bold text-lg text-grey-darkest" for="calendly">username</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" name="calendly" id="calendly" value={username} onChange={e => setUsername(e.target.value)}/>
  </div>
    <Link to={{ pathname: '/home', aboutProps: {
      name: username
    }}}><button class="block bg-green-500 text-white hover:bg-teal-dark uppercase text-lg mx-auto p-4 rounded" type="submit">Boom!</button></Link>
  
    </div>
</div>
    )
}

export default Login;