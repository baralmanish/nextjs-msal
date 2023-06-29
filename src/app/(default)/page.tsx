// "use client";

// import {
//   AuthenticatedTemplate,
//   UnauthenticatedTemplate,
// } from "@azure/msal-react";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <h2 className="h2"> Home Page </h2>
      {/* <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
      </UnauthenticatedTemplate> */}
    </div>
  );
}
