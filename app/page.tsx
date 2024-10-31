import AuthForm from "./components/AuthForm";
import JokeList from "./components/JokeLIst";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Joke Service</h1>
      <AuthForm />
      <JokeList />
    </div>
  );
};

export default Home;
