import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home, WeeklyData } from "../pages";
import { Navbar } from "./";
import { Component } from "react";
import styles from "../styles/app.module.css";

const Page404 = () => {
  return <h1>404</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
  
          <Navbar />
  
          <div className={styles.navContainer}>
            <nav>
              <NavLink  className={styles.navLoc} exact="true" to="/" >Home</NavLink>
              <NavLink  className={styles.navLoc} exact="true" to="/weekly-info" >Week Info</NavLink>
            </nav>
    
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/weekly-info" element={<WeeklyData />} />
              <Route path="*" Component={Page404} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
