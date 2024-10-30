"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "../constants/apiConstants";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/jokes");
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || "Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
  );
};

export default AuthForm;
