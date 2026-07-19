"use client";
import Input from "@/src/components/input/Input";
import Logo from "@/src/components/logo/Logo";
import { useRouter } from "next/navigation";
import Router from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-full p-4">
      <Logo />
      <h1>Login</h1>
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Username"
          className="w-full"
          label="Username"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full"
          label="Password"
        />
        <p>Forgot Password</p>
        <div className="flex flex-row gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => router.push("/auth/mfa")}
          >
            Login
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => router.push("/auth/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
