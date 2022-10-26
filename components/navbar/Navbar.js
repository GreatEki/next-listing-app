import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, authReady, login, logout } = useContext(AuthContext);
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="props" width={128} height={77} />
      </div>

      {authReady && (
        <div className="nav-links">
          <Link href="/">
            <a> Home </a>
          </Link>
          <Link href="/about">
            <a> About </a>
          </Link>

          {user && (
            <Link href="/ninjas">
              <a> Ninja Listing </a>
            </Link>
          )}

          <ul className="auth-links">
            {!user && (
              <li onClick={login} className="auth-links-item">
                {" "}
                Login/Signup{" "}
              </li>
            )}
            {user && (
              <li onClick={login} className="auth-links-item">
                {" "}
                {user?.email}
              </li>
            )}

            {user && (
              <li onClick={logout} className="auth-links-item logout">
                {" "}
                Logout
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
