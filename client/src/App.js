import { Routes, Route } from "react-router-dom";
import { HomeScreen, ProductDetailScreen } from "./screens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductDetailScreen />} />
      </Routes>
    </>
  );
}

export default App;
