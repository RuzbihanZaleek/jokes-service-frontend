import JokeList from "../components/deliveredJokeComponent/JokeList";

const JokesPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Deliver Jokes List</h1>
      <JokeList />
    </div>
  );
};

export default JokesPage;
