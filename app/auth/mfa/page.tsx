"use client";
import Input from "@/src/components/input/Input";
import Logo from "@/src/components/logo/Logo";
import { useRouter } from "next/navigation";

export default function MFA() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-full p-4">
      <Logo />
      <h1>MFA</h1>
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Input
          type="number"
          placeholder="Enter OTP"
          className="w-full"
          maxLength={6}
          label="OTP"
        />
        <p>Forgot Password</p>
        <div className="flex flex-row gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => router.push("/dashboard")}
          >
            Submit
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
