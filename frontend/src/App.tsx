<<<<<<< HEAD
const App = () => {
  return <div>FestNepal Dashboard</div>;
};

=======
import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div className="toggle-buttons">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Signup</button>
      </div>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

>>>>>>> main
export default App;
