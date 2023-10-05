import React from "react";

const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-10 rounded-md items-center border border-red-500 w-1/5 bg-white p-4 shadow-md drop-shadow-lg h-[60%]">
        <div className="text-blue-700">Login</div>
        <div className="flex flex-col items-center w-full gap-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button className="btn btn-secondary w-1/2">Login</button>
        <p>Not yet Registered?</p>
      </div>
    </div>
  );
};

export default Signin;
