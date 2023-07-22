import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, ProductDetailScreen, CartScreen } from "./screens";
import Heaader from "./components/Header";

import { Footer } from "./components";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Heaader />

        <main className="my-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductDetailScreen />} />
              <Route path="/cart/:id?" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
