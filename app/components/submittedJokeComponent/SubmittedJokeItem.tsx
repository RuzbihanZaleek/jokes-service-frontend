import { SubmittedJoke } from "@/app/types/joke";

interface SubmittedJokeItemProps {
  joke: SubmittedJoke;
  onEdit: (joke: SubmittedJoke) => void;
  onApprove: (joke: SubmittedJoke) => void;
  onDelete: (id: string) => void;
}

const SubmittedJokeItem: React.FC<SubmittedJokeItemProps> = ({
  joke,
  onEdit,
  onApprove,
  onDelete,
}) => {
  return (
    <li className="border p-4 rounded">
      <div className="flex justify-between items-center ">
        <div className="w-3/4">
          {joke.content} - <span className="italic">{joke.type}</span>
        </div>
        <div className="mt-2">
          {joke.isDelivered ? (
            <button
              onClick={() => onDelete(joke._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          ) : (
            <>
              <button
                onClick={() => onApprove(joke)}
                className="bg-green-500 text-white p-2 rounded mr-2"
              >
                Approve
              </button>
              <button
                onClick={() => onEdit(joke)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(joke._id)}
                className="bg-red-500 text-white p-2 rounded ml-2"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default SubmittedJokeItem;
