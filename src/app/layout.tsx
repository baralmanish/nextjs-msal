"use client";

import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "@/shared/config/authConfig";

import "./assets/styles/style.css";

import { Roboto, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} font-poppins antialiased bg-[#000] text-gray-300 tracking-tight`}
      >
        <MsalProvider instance={msalInstance}>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </MsalProvider>
      </body>
    </html>
  );
}
