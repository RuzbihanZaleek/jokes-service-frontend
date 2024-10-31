"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthorized, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link href="/submit">Submit Joke</Link>
        <Link href="/jokes">View Jokes</Link>
      </div>

      {/* Conditionally render the Unmoderate Jokes link */}
      {isAuthorized ? (
        <div className="flex ml-4 gap-4">
          <Link href="/submittedJokes">Submitted Jokes</Link>
          <Link href="/" onClick={logout}>
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
