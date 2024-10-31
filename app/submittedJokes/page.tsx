"use client";

import { useRouter } from "next/navigation";
import SubmittedJokeList from "../components/submittedJokeComponent/SubmittedJokeList";
import { useEffect } from "react";

const SubmittedJokesPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <SubmittedJokeList />
    </div>
  );
};

export default SubmittedJokesPage;
