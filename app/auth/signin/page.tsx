"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-10 rounded-md items-center border border-red-500 w-1/5 bg-white p-4 shadow-md drop-shadow-lg h-[60%]">
        <div className="text-blue-700 text-2xl font-bold">Login</div>
        <div className="flex flex-col items-center w-full gap-5">
          <input
            type="Email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="Password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button onClick={handleLogin} className="btn btn-secondary w-1/2">
          Login
        </button>
        <div className="flex gap-2">
          <p className="text-black">Not yet Registered?</p>
          <Link href="/auth/register" className="text-blue-700">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
