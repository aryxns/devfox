import React from "react";
import Header from "./header";

function Rules() {
    return(
        <div>
        <Header/>
        <div class="p-6 ml-10 font-mono mt-8 bg-gray-900 w-50 rounded-100 shadow-xl mx-auto">
        <h3 className="text-2xl text-green-300 mx-auto">How do you earn points in DevFox?</h3>
        <br/>
        <h3 className="text-xl text-white">You can earn 5 points for completing tasks on the <a className="text-gray-200 underline" href="/tasks">/tasks</a> page</h3>
        <h3 className="text-xl text-white">You can earn 5 points for posting daily updates on the <a className="text-gray-200 underline" href="/updates">/updates</a> page</h3>
        <h3 className="text-xl text-white">You can earn 3 points for answering questions on the <a className="text-gray-200 underline" href="/community">/community</a> page</h3>
        <h3 className="text-xl text-white">You can earn 1 point for asking questions on the <a className="text-gray-200 underline" href="/community">/community</a> page</h3>
        <br/>
        <h3 className="text-2xl text-green-300 mx-auto">Some other cool stuff</h3>
        <h3 className="text-xl text-white">You can see your rank in the tournament on the <a className="text-gray-200 underline" href="/leaderboard">/leaderboard</a> page</h3>
        <h3 className="text-xl text-white">You can upvote other player's updates on the <a className="text-gray-200 underline" href="/updates">/updates</a> page</h3>
    </div>
    </div>
    )
}
export default Rules;