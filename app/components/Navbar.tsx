"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if the user is authorized by looking for a token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/submit">Submit Joke</Link>
        <Link href="/jokes">View Jokes</Link>
      </div>
      
      {/* Conditionally render the Unmoderate Jokes link */}
      {isAuthorized && (
        <div className="ml-4">
          <Link href="/submittedJokes">Submitted Jokes</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
