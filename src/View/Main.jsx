import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CLIENT_ID, REDIRECT_URI } from "../api";
import { Login } from "../components/Login/Login";
import { UserPlaylists } from "../components/UserPlaylists/UserPlaylists";
import { LogOut } from "../components/LogOut/LogOut";

export const Main = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code-verifier");
  const [token, setToken] = useState("");

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    code_verifier: codeVerifier,
  });

  const fetchToken = () => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access-token", data.access_token);
        setToken(localStorage.getItem("access-token"));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchToken();
  }, [code, codeVerifier]);

  return (
    <>
      {token ? (
        <>
          <h1>Main</h1>
          <LogOut />
          <Link to="/Search">
            <button>Search</button>
          </Link>
          <UserPlaylists />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
