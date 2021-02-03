import React from "react";

function AccountSuccess() {
    return(
        <div class="font-mono mt-8 bg-gray-800 w-40 rounded-100 shadow-xl mx-auto">
        <h3 className="text-2xl text-green-300 mx-auto">Account Created Successfully</h3>
        <br/>
        <h3 className="text-xl text-white">You can now <a className="text-gray-200 underline" href="/login">LOGIN</a></h3>
    </div>
    )
}

export default AccountSuccess;