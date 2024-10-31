"use client";

import { useEffect, useState } from "react";
import JokeList from "./JokeList";
import EditJokeForm from "./EditJokeForm";
import { SubmittedJoke } from "@/app/types/joke";
import {
  MODERATE_API_ENDPOINTS,
  SUBMIT_API_BASE_URL,
} from "@/app/constants/apiConstants";
import { showAlert } from "@/app/utils/AlertUtil";

const SubmittedJokeList = () => {
  const [jokes, setJokes] = useState<SubmittedJoke[]>([]);
  const [editingJoke, setEditingJoke] = useState<SubmittedJoke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJokes = async () => {
    try {
      const response = await fetch(SUBMIT_API_BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Add the token
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJokes(data);
    } catch (error) {
      console.error("Failed to fetch jokes:", error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const approveJoke = async (joke: SubmittedJoke) => {
    try {
      const response = await fetch(
        `${MODERATE_API_ENDPOINTS.APPROVE}/${joke._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(joke),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      showAlert({
        title: "Success!",
        text: "Joke approved successfully!",
        icon: "success",
      });
      fetchJokes();
    } catch (error) {
      console.log("Failed to approve joke:", error);
    }
  };

  const deleteJoke = async (id: string) => {
    try {
      await fetch(`${SUBMIT_API_BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      showAlert({
        title: "Success!",
        text: "Joke deleted successfully!",
        icon: "success",
      });
      fetchJokes();
    } catch (error) {
      console.error("Failed to delete joke:", error);
    }
  };

  const updateJoke = async (updatedJoke: SubmittedJoke) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${SUBMIT_API_BASE_URL}/${updatedJoke._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedJoke),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      showAlert({
        title: "Success!",
        text: "Joke updated successfully!",
        icon: "success",
      });
      setEditingJoke(null);
      fetchJokes();
    } catch (error) {
      console.error("Failed to update joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {editingJoke ? (
        <EditJokeForm
          joke={editingJoke}
          onUpdate={updateJoke}
          onCancel={() => setEditingJoke(null)}
          loading={loading}
        />
      ) : (
        <JokeList
          jokes={jokes}
          onEdit={setEditingJoke}
          onApprove={approveJoke}
          onDelete={deleteJoke}
        />
      )}
    </div>
  );
};

export default SubmittedJokeList;
