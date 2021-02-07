import React from "react";

function QuestionSuccess() {
    return(
        <div class="font-mono mt-8 bg-gray-800 w-40 rounded-100 shadow-xl mx-auto">
        <h3 className="text-2xl text-green-300 mx-auto">Question Posted Successfully</h3>
        <br/>
        <h3 className="text-xl text-white">You can now await answers on the <a className="text-gray-200 underline" href="/community">homepage</a></h3>
    </div>
    )
}

export default QuestionSuccess;