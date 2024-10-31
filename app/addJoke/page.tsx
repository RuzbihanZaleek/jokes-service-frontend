import JokeForm from "../components/submittedJokeComponent/JokeForm";
import { DELIVER_API_BASE_URL } from "../constants/apiConstants";

const AddJokePage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Add a Joke</h1>
      <JokeForm url={DELIVER_API_BASE_URL} buttonText="Add New Joke" />
    </div>
  );
};

export default AddJokePage;
