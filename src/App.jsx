import React from "react";
// import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./View/Login";
import { Main } from "./View/Main";
import { Playlist } from "./View/Playlist";
import { Search } from "./View/Search";
import "./App.css";

function App() {
  // const [clientId, setClientId] = useState("");

  // const generateRandomString = ({ length }: any) => {
  //   let text = "";
  //   let possible =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (let i = 0; i < length; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // };

  // const codeVerifier = generateRandomString({ length: 128 });
  // const URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-read-private%20user-read-email%20user-read-private`;
  // const code = new URLSearchParams(window.location.search).get("code");

  // const body =
  //   "grant_type=authorization_code" +
  //   "&code=" +
  //   code +
  //   "&redirect_uri=http://localhost:3000" +
  //   "&client_id=" +
  //   clientId +
  //   "&code_verifier=" +
  //   codeVerifier;

  // const fetchToken = () => {
  //   fetch("https://accounts.spotify.com/api/token", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: body,
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("HTTP status " + response.status);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       localStorage.setItem("access-token", data.access_token);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Playlist" element={<Playlist />}></Route>
            <Route path="/Search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
