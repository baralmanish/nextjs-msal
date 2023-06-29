import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
//
import { navData } from "@/shared/config/constants";
import { NavDataTypes } from "@/shared/config/types";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex gap-2 md:gap-5 flex-wrap items-center">
        {navData.map((e: NavDataTypes, i: number) => (
          <li key={i}>
            <Link
              className={`text-sm md:text-lg font-medium hover:underline${
                pathname == e.path ? " text-green-500" : ""
              }`}
              href={e.path}
            >
              {e.name}
            </Link>
          </li>
        ))}
        <li>
          <AuthenticatedTemplate>
            <Link
              className="text-sm md:text-lg font-medium hover:underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <Link
              className="text-sm md:text-lg font-medium hover:underline"
              href="/login"
            >
              Login
            </Link>
          </UnauthenticatedTemplate>
        </li>
      </ul>
    </nav>
  );
}
