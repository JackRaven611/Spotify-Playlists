import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CLIENT_ID, REDIRECT_URI } from "../api";
import { Login } from "../components/Login/Login";

export const Main = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  const codeVerifier = localStorage.getItem("code-verifier");

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
      {code ? (
        <>
          <h1>Main</h1>
          <Link to="/Playlist">
            <button>Playlist</button>
          </Link>
          <Link to="/Search">
            <button>Search</button>
          </Link>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};