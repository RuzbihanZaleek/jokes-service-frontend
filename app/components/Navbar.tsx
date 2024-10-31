"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/submit">Submit Joke</Link>
      <Link href="/jokes">View Jokes</Link>
    </nav>
  );
};

export default Navbar;
