import React, { useContext } from "react";
import { MusicContext } from "../App";

export default function Library({ song }) {
  const { handleCurrentSong } = useContext(MusicContext);
  return (
    <div
      onClick={() => {
        handleCurrentSong(song.id);
      }}
      className="libraryComponent"
    >
      <img src={song.cover} alt="song's cover" />
      <div className="songDetails">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
