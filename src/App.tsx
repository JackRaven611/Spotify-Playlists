import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Main } from "./View/Main";
import { Playlist } from "./View/Playlist";
import { Search } from "./View/Search";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Playlist" element={<Playlist />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
