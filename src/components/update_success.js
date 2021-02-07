import React from "react";

function UpdateSuccess() {
    return(
        <div class="font-mono mt-8 bg-gray-800 w-40 rounded-100 shadow-xl mx-auto">
        <h3 className="text-2xl text-green-300 mx-auto">Update Posted Successfully</h3>
        <br/>
        <h3 className="text-xl text-white">You can now await upvotes on the <a className="text-gray-200 underline" href="/updates">updates page</a></h3>
    </div>
    )
}

export default UpdateSuccess;