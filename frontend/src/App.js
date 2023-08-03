import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ShopHub</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
