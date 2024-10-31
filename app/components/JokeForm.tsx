"use client";

import { useState, useEffect } from "react";
import { JOKE_TYPES, SUBMIT_API_BASE_URL } from "../constants/apiConstants";

const JokeForm = () => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

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
        setSubmissionStatus("Joke submitted successfully!");
        setContent("");
        setType("");
      } else if (response.status === 409) {
        const errorData = await response.json();
        setSubmissionStatus(errorData.message || "Joke already exists.");
      } else {
        setSubmissionStatus("Failed to submit joke. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again.");
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

      {/* Show success message */}
      {submissionStatus && (
        <p
          className={`mt-4 ${
            submissionStatus.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {submissionStatus}
        </p>
      )}
    </form>
  );
};

export default JokeForm;
