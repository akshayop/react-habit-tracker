import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Navbar } from "./";

const Page404 = () => {
  return <h1>404</h1>
}

function App() {
  return (
    <div className="App">
      <Router> 
        
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" Component={Page404} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
