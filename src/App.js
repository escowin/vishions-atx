import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const vishions = {
    name: "Vishions ATX",
    address: "3207 Red River Street, Austin TX",
    hours: [
      {
        day: "Mon-Sat",
        time: "10a-10p",
      },
      {
        day: "Sun",
        time: "10a-9p",
      },
    ],
    contact: {
      phone: "512-645-0575",
      email: "vishions.atx@gmail.com",
      ig: "vishions-atx",
    },
    motto: "We smoke the competition 💨",
  };

  return (
    <div className="body">
      <Header vishions={vishions} setSelectedProduct={setSelectedProduct} />
      <main>
        <Product selectedProduct={selectedProduct} />
      </main>
      <Footer vishions={vishions} />
    </div>
  );
}

export default App;
