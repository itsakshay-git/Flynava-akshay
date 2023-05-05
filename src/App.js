import "./App.css";
import { useEffect, useState } from "react";
import fetchData from "./service";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setdata] = useState([])

  useEffect(() => {
    let test = async () =>{
      let movieData = await fetchData();
      console.log(movieData)
      setdata(movieData)
      console.log(data)
    }
    test()
     // eslint-disable-next-line
  }, []);

  return (
    <div className="mainpage">
      {isLoggedIn ? <Nav setIsLoggedIn={setIsLoggedIn} /> : (<div className='notloggedin'></div>)}
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn}/>: null}
      <Outlet  context={{isLoggedIn, setIsLoggedIn, data}}/>
    </div>
  );
}

export default App;
