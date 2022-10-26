import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, login } = useContext(AuthContext);
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="props" width={128} height={77} />
      </div>

      <div className="nav-links">
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/ninjas">
          <a> Ninja Listing </a>
        </Link>
        <ul className="auth-links">
          <li onClick={login} className="auth-links-item">
            {" "}
            Login/Signup{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
