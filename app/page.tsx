import AuthForm from "./components/authComponent/AuthForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Joke Service</h1>
      <AuthForm />
    </div>
  );
};

export default Login;
