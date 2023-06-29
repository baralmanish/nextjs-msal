import Link from "next/link";
import { usePathname } from "next/navigation";

import { authNavData } from "@/shared/config/constants";
import { NavDataTypes } from "@/shared/config/types";

const AuthSide = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul>
        <Link
          className="text-sm md:text-lg font-medium hover:underline"
          href="/"
        >
          Home
        </Link>
        {authNavData.map((e: NavDataTypes, i: number) => (
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
      </ul>
    </div>
  );
};

export default AuthSide;
