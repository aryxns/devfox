import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

function LandingPage() {
    const work = [
        "DevFox is a gamified task manager",
        "DevFox is a Community platform",
        "DevFox is an accountability platform",
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
        <h1 className="mt-10 w-50 font-mono text-5xl text-white text-center uppercase"><span className="bg-green-300 text-black p-2">DevFox is a virtual tournament for new developers</span></h1>
        <br/>
        <p className="mt-3 w-50 font-mono text-xl text-white text-center uppercase"><span className="text-black bg-blue-300 p-1">DevFox runs on only React and Firebase</span></p>
        <br/>
        <br/>
        <br/>
        <hr className="bg-green-200 w-1/2 mx-auto"/>
        <br/>
        <div className="mx-auto w-4/5 align-items-center text-center">
        <h1 className=" text-4xl ml-32 uppercase font-mono font-bold w-4/5 text-white">
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
                <li className="text-2xl text-white lowercase font-mono">- Compete on the leaderboard</li>
                <li className="text-2xl text-white lowercase font-mono">- Ask questions to fellow community members</li>
                <li className="text-2xl text-white lowercase font-mono">- Answer questions and earn points</li>
                <li className="text-2xl text-white lowercase font-mono">- Post daily accountability updates</li>
                <li className="text-2xl text-white lowercase font-mono">- education Quests <span className="text-gray-400">(coming soon)</span></li>
            </ul>
        </div>
        </div>
    )
}

export default LandingPage;