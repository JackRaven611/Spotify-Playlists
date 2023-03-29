import { Link } from "react-router-dom";

export const Main = () => {
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
