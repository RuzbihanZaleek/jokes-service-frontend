import { JOKE_TYPES } from "@/app/constants/apiConstants";
import { SubmittedJoke } from "@/app/types/joke";
import { useState } from "react";

interface EditJokeFormProps {
  joke: SubmittedJoke;
  onUpdate: (joke: SubmittedJoke) => void;
  onCancel: () => void;
  loading: boolean;
}

const EditJokeForm: React.FC<EditJokeFormProps> = ({
  joke,
  onUpdate,
  onCancel,
  loading,
}) => {
  const [content, setContent] = useState(joke.content);
  const [type, setType] = useState(joke.type);

  const handleUpdate = () => {
    onUpdate({ ...joke, content, type });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Update Joke</h1>
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        >
          {JOKE_TYPES.map((jokeType) => (
            <option key={jokeType} value={jokeType}>
              {jokeType}
            </option>
          ))}
        </select>
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
        <button
          onClick={onCancel}
          className="ml-2 bg-gray-500 text-white p-2 rounded"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditJokeForm;
