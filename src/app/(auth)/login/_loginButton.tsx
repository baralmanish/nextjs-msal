"use client";

import AuthService from "@/shared/services/auth.service";

const LoginBtn = () => {
  const handleLogin = async () => {
    const response = await AuthService.msalLogin();
    if (response.accessToken) {
      console.log("accessToken:", response.accessToken);
    }
  };

  return (
    <div className="mt-5">
      <button
        onClick={handleLogin}
        className="p-3 rounded bg-black text-white hover:bg-slate-700"
      >
        Signin
      </button>
    </div>
  );
};

export default LoginBtn;
