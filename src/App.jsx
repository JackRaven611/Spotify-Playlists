import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from "./View/Main";
import { Playlist } from "./View/Playlist";
import { Search } from "./View/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Playlist" element={<Playlist />}></Route>
            <Route path="/Search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
