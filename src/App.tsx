import "./styles.css";
//import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Users from "./data/user.json";
export default function App() {
  return (
    <div className="text-3xl font-bold underline">
      <h1>Onboarding Tracker</h1>
      <h2>Start editing to see some magic happen!</h2>

      {Users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}
