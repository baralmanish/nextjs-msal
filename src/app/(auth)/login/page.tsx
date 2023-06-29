import Link from "next/link";

import LoginBtn from "./_loginButton";

export const metadata = {
  title: "Login Page",
};

export default function Login() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <h2 className="h2"> Login Page </h2>
      <div className="bg-white text-black box-border rounded w-[90%] max-w-[400px] mt-10 p-10 flex flex-col items-center justify-center">
        <h2>Click on the below button to login</h2>
        <LoginBtn />
        <Link href="/" className="mt-5">
          GO TO HOME
        </Link>
      </div>
    </div>
  );
}
