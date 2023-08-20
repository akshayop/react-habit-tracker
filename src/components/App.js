import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home, WeeklyData } from "../pages";
import { Navbar } from "./";
import { Component } from "react";

const Page404 = () => {
  return <h1>404</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
  
          <Navbar />
  
          <nav>
            <NavLink exact="true" to="/" >Home</NavLink>
            <NavLink exact="true" to="/weekly-info" >Week Info</NavLink>
          </nav>
  
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/weekly-info" element={<WeeklyData />} />
            <Route path="*" Component={Page404} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
