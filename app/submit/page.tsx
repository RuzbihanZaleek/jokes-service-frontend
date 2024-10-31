import JokeForm from "../components/submittedJokeComponent/JokeForm";
import { SUBMIT_API_BASE_URL } from "../constants/apiConstants";

const SubmitPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Submit a Joke</h1>
      <JokeForm url={SUBMIT_API_BASE_URL} buttonText="Submit Joke" />
    </div>
  );
};

export default SubmitPage;
