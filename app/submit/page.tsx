import JokeForm from "../components/submittedJokeComponent/JokeForm";

const SubmitPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Submit a Joke</h1>
      <JokeForm />
    </div>
  );
};

export default SubmitPage;
