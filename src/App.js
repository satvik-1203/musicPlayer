import React, { useState } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import UILibrary from "./components/UILibrary";
import LibraryBtn from "./components/LibraryBtn";

export const MusicContext = React.createContext();

function App() {
  const [Songs] = useState(data());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(Songs[currentSongIndex]);

  const [library, setLibrary] = useState(false);

  const handleLibraryState = () => {
    setLibrary(!library);
  };

  const handleCurrentSongIndex = (value) => {
    if (currentSongIndex === 0 && value <= 0) return;
    if (currentSongIndex == Songs.length - 1 && value >= 0) return;
    setCurrentSongIndex(currentSongIndex + value);
    setCurrentSong(Songs[currentSongIndex + value]);
  };

  const handleCurrentSong = (id) => {
    const songIndex = Songs.findIndex((song) => song.id === id);
    setCurrentSong(Songs[songIndex]);
  };

  const toggleCurrentSong = (state) => {
    const newState = { ...currentSong };
    newState.active = state;
    setCurrentSong(newState);
  };

  const MusicHandlers = {
    toggleCurrentSong,
    handleLibraryState,
    handleCurrentSong,
    handleCurrentSongIndex,
  };

  return (
    <MusicContext.Provider value={MusicHandlers}>
      <main className={library ? "active" : "notActive"}>
        <header>
          <h1>Waves</h1>
          <LibraryBtn libraryState={library} />
        </header>
        <Song song={currentSong} />
        <Player song={currentSong} songIndex={currentSongIndex} />
      </main>
      {<UILibrary songs={Songs} library={library} />}
    </MusicContext.Provider>
  );
}

export default App;
