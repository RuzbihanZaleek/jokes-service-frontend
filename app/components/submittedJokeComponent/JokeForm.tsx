"use client";

import { useState } from "react";
import { JOKE_TYPES, SUBMIT_API_BASE_URL } from "../../constants/apiConstants";
import { showAlert } from "@/app/utils/AlertUtil";

const JokeForm = () => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(SUBMIT_API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, type }),
      });

      if (response.ok) {
        showAlert({
          title: "Success!",
          text: "Joke submitted successfully!",
          icon: "success",
        });
        setContent("");
        setType("");
      } else if (response.status === 409) {
        const errorData = await response.json();
        showAlert({
          title: "Info!",
          text: "Joke already exists!",
          icon: "info",
        });
      } else {
        showAlert({
          title: "Error!",
          text: "Failed to submit joke. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      showAlert({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <textarea
        placeholder="Enter your joke"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select joke type</option>
        {JOKE_TYPES.map((jokeType) => (
          <option key={jokeType} value={jokeType}>
            {jokeType}
          </option>
        ))}
      </select>
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Submit Joke
      </button>
    </form>
  );
};

export default JokeForm;
