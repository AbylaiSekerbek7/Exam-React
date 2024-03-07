import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Add_Book from "./components/Functions/Add/Add_Book";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add" element={<Add_Book />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
