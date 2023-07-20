import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
