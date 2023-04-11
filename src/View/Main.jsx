import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Main = () => {
  const clientId = "e6d7f42c79a04dfbafddadc1352f5889";
  const redirectUri = "http://localhost:3000";
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");

  let codeVerifier = localStorage.getItem("code-verifier");

  let body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
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
    console.log("1", code, "2", codeVerifier);
  }, [code, codeVerifier]);

  return (
    <>
      <h1>Main</h1>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Playlist">
        <button>Playlist</button>
      </Link>
      <Link to="/Search">
        <button>Search</button>
      </Link>
    </>
  );
};
