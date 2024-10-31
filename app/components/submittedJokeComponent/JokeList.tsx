import { SubmittedJoke } from "@/app/types/joke";
import SubmittedJokeItem from "./SubmittedJokeItem";
interface JokeListProps {
  jokes: SubmittedJoke[];
  onEdit: (joke: SubmittedJoke) => void;
  onApprove: (joke: SubmittedJoke) => void;
  onDelete: (id: string) => void;
}

const JokeList: React.FC<JokeListProps> = ({
  jokes,
  onEdit,
  onApprove,
  onDelete,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Submitted Jokes List</h1>
      <ul className="space-y-2">
        {jokes.map((joke) => (
          <SubmittedJokeItem
            key={joke._id}
            joke={joke}
            onEdit={onEdit}
            onApprove={onApprove}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default JokeList;
