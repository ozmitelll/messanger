import './App.css';
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import UserList from "./components/UserList/UserList";

function App() {

  return (
    <>
        <UserList/>
        <Login/>
      <Registration/>
    </>
  );
}

export default App;
