"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { useIsAuthenticated } from "@azure/msal-react";

import AuthSide from "@/common/widgets/auth-side";
import AuthService from "@/shared/services/auth.service";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useIsAuthenticated();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticating(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      redirect("/login");
    }
  }, [isAuthenticating, isAuthenticated]);

  const logout = async () => {
    try {
      if (window.confirm("Are you sure you want to logout?")) {
        await AuthService.msalLogout();
      }
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      console.log("error logging out: " + err);
    }
  };

  if (isAuthenticating) {
    return (
      <div className="flex items-center justify-center min-h-[100vh]">
        Is Authenticating...
      </div>
    );
  }

  return (
    <main className="grow flex">
      <aside className="w-[200px] bg-slate-600">
        {/* <div className="text-md md:text-lg font-black mb-3 p-5 border-b-1 border-blue-900"> */}
        <div className="p-5 bg-gray-800 text-md md:text-lg font-black">
          APP NAME
        </div>
        <div className="p-5">
          <AuthSide />
          <button
            className="text-sm md:text-lg font-medium hover:underline"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 p-5">{children}</div>
    </main>
  );
}
