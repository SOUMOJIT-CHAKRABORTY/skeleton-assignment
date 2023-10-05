"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-10 rounded-md items-center border border-red-500 w-1/5 bg-white p-4 shadow-md drop-shadow-lg h-[60%]">
        <div className="text-blue-700 text-2xl font-bold">Register</div>
        <div className="flex flex-col items-center w-full gap-5">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              placeholder="Age"
              className="input input-bordered input-primary w-[44%] max-w-xs"
            />
            <input
              type="text"
              placeholder="Profession"
              className="input input-bordered input-primary w-[44%] max-w-xs"
            />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button onClick={handleRegister} className="btn btn-secondary w-1/2">
          Login
        </button>
        <p className="text-black">Already an User?</p>
        <Link href="#" className="text-blue-700">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Signin;
