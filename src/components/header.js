import React from "react";
import {Link} from "react-router-dom";

function Header() {
  const username = localStorage.getItem('username')
    return(
    <header class="bg-gray-900 flex items-center justify-between px-4 py-3 bg-gray-">
      <h3 class="text-white w-5 text-5xl font-mono"><Link to={{ pathname: '/home', aboutProps: {
      name: username
    }}}>DevFox</Link></h3>
      <div className="float-right">
      <a href="/rules"><button className="mr-2 bg-gray-300 font-mono focus:outline-none focus:ring focus:border-blue-300 rounded-xl"><h4 className="p-2">Rules</h4></button></a>
      <a href="/leaderboard"><button className="bg-green-300 focus:outline-none focus:ring focus:border-blue-300 font-mono rounded-xl mr-2"><h4 className="p-2">Leaderboard</h4></button></a>
      <a href="/community"><button className="mr-2 bg-red-300 focus:outline-none focus:ring focus:border-blue-300 font-mono rounded-xl"><h4 className="p-2">Questions</h4></button></a>
      <a href="/updates"><button className="mr-2 bg-blue-300 focus:outline-none focus:ring focus:border-blue-300 font-mono rounded-xl"><h4 className="p-2">Updates</h4></button></a>
      </div>
    </header>
    )
}

export default Header;