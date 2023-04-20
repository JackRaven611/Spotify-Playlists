import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import { PlaylistUl } from "../styles/PlaylistUl";

export const Playlist = () => {
  const location = useLocation();
  const href = location.state;
  const token = localStorage.getItem("access-token");
  const [songs, setSongs] = useState<any[]>([]);

  async function fetchSongs(token: string): Promise<any> {
    const result = await fetch(href, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await result.json();
    setSongs(data.items);
  }

  useEffect(() => {
    if (typeof token === "string") {
      fetchSongs(token);
    }
  }, []);

  console.log(songs);

  const userList = songs.map((song) => (
    <li key={song.track.id}>
      <img src={song.track.album.images[2].url} alt="playlist img" />
      <div>
        <h3>{song.track.name}</h3>
        <p>{song.track.album.name}</p>
      </div>
    </li>
  ));

  return (
    <>
      <h1>Playlist Page</h1>
      <BackButton />
      <PlaylistUl>{userList}</PlaylistUl>
    </>
  );
};
