import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />} />
    </Routes>
  );
};

export default App;
