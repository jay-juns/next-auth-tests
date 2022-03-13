import React from "react";

import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
     <div>
        {status === "authenticated" ? (
            <div className="hidden md:flex items-center space-x-1">
              <button className="py-5 px-3" onClick={() => signOut()}>Log out</button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-1">
              <a href="/api/auth/signin" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>
          )}
     </div>
  )
};

export default Navbar;