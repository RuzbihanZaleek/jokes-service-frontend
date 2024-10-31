"use client";

import { useEffect, useState } from "react";
import { Joke } from "../types/joke";
import { DELIVER_API_BASE_URL } from "../constants/apiConstants";

const JokeList = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [jokeTypes, setJokeTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");

  // Fetch all jokes by default
  const fetchJokes = async (type: string) => {
    try {
      const url =
        type === "All"
          ? DELIVER_API_BASE_URL
          : `${DELIVER_API_BASE_URL}/types/${type}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJokes(data);
    } catch (error) {
      console.log("Failed to fetch jokes:", error);
    }
  };

  // Fetch joke types
  const fetchJokeTypes = async () => {
    try {
      const response = await fetch(`${DELIVER_API_BASE_URL}/types`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJokeTypes(["All", ...data]);
    } catch (error) {
      console.log("Failed to fetch joke types:", error);
    }
  };

  useEffect(() => {
    fetchJokeTypes();
    fetchJokes(selectedType);
  }, []);

  // Handle type change
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    fetchJokes(type);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Dropdown for joke types */}
      <select
        value={selectedType}
        onChange={handleTypeChange}
        className="border p-2 rounded mb-4"
      >
        {jokeTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Conditional message for no jokes */}
      {jokes.length === 0 ? (
        <p className="text-lg text-red-500">
          No {selectedType} type jokes found.
        </p>
      ) : (
        <ul className="space-y-2">
          {jokes.map((joke) => (
            <li key={joke.id} className="border p-4 rounded">
              {joke.content} - <span className="italic">{joke.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JokeList;
