import { useEffect, useState } from "react";

export const UserPlaylists = () => {
  const token = localStorage.getItem("access-token");
  const [playlists, setPlaylists] = useState<any[]>([]);

  async function fetchPlaylists(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me/playlists", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await result.json();
    setPlaylists(data.items);
  }

  useEffect(() => {
    if (typeof token === "string") {
      fetchPlaylists(token);
    }
  }, []);

  console.log(playlists);

  const userList = playlists.map((playlist) => (
    <li key={playlist.id}>
      <img src={playlist.images[0].url} alt="playlist img" />
      <h2>{playlist.name}</h2>
    </li>
  ));

  return (
    <div>
      <ul>{userList}</ul>
    </div>
  );
};
