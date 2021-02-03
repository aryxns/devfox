import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

function LandingPage() {
    const work = [
        "DevFox is a Gamified task manager",
        "DevFox is a Community platform",
        "DevFox is a Digital competition",
      ];
    return(
        <div>
        <header class="bg-gray-900 flex items-center justify-between px-4 py-3">
            <h3 class="text-white w-5 text-5xl font-mono">DevFox</h3>
            <div className="float-right">
        <a href="/login"><button className="bg-gray-300 font-mono rounded-xl mr-2"><h4 className="p-2">Login</h4></button></a>
        <a href="/join"><button className="mr-2 bg-blue-300 font-mono rounded-xl"><h4 className="p-2">Join</h4></button></a>
      </div>
        </header>
        <div id="body" className="">
            <br/>
            <div className="">
            <img className="border-2 border-green mx-auto w-1/2 rounded-2xl" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F67ef1feb-900b-44ad-8a36-5f448e323595%2Fhomepage.jpg?table=block&id=6279dfb4-18e3-4448-a02c-39b03b540bea&width=3070&userId=bb96057c-c11b-434e-ae26-ba5346c07d23&cache=v2" alt="as"/>
            </div>
            <br/>
        </div>
        <div className="mx-auto w-4/5 align-items-center text-center">
        <h1 className="text-5xl ml-32 uppercase font-mono font-bold w-4/5 text-white">
            <TypistLoop interval={3000}>{work.map((text) => (
            <Typist key={text} startDelay={1000}>
              {text}
            </Typist>
          ))}
        </TypistLoop>
            </h1>
        </div>
        <br/>
        <hr className="bg-green-200 w-1/2 mx-auto"/>
        <br/>
        <div className="w-4/5 mx-auto text-center">
            <ul className="text-2xl text-white">
                <li className="text-2xl text-white lowercase font-mono">- Complete Tasks to earn points</li>
                <li className="text-2xl text-white lowercase font-mono">- Track your position on the leaderboard</li>
                <li className="text-2xl text-white lowercase font-mono">- Ask questions to fellow community members</li>
                <li className="text-2xl text-white lowercase font-mono">- Answer questions and earn points</li>
            </ul>
        </div>
        </div>
    )
}

export default LandingPage;