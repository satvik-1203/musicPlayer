import React, { useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MusicContext } from "../App";
import LibraryBtn from "./LibraryBtn";

import {
  faBackward,
  faPlay,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Player(props) {
  const { song, songIndex } = props;
  const refAudio = useRef();

  const [songInfo, setSongInfo] = useState({
    current: "",
    duration: "",
  });

  const { toggleCurrentSong, handleCurrentSongIndex } = useContext(
    MusicContext
  );

  const handleSongInfo = (e) => {
    setSongInfo({
      ...songInfo,
      current: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const handleSongInfoFormat = (current) => {
    return (
      Math.floor(current / 60) +
      ":" +
      ("0" + Math.floor(current % 60)).slice(-2)
    );
  };

  const handleAudioPlayState = () => {
    if (song.active) {
      refAudio.current.pause();
      toggleCurrentSong(!song.active);
    }
    if (!song.active) {
      refAudio.current.play();
      toggleCurrentSong(!song.active);
    }
  };

  const handleDragInput = (e) => {
    refAudio.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  return (
    <div className="playerContainer">
      <div className="timePlayer">
        <div className="control startTime">
          {handleSongInfoFormat(songInfo.current)}
        </div>
        <input
          onChange={handleDragInput}
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
        />
        <div className="control endTime">
          {handleSongInfoFormat(songInfo.duration)}
        </div>
      </div>
      <div className="controlsPlayer">
        <FontAwesomeIcon
          onClick={() => {
            handleCurrentSongIndex(-1);
          }}
          className="prevSong playerControl"
          icon={faBackward}
          size="2x"
        />
        <FontAwesomeIcon
          className="play playerControl"
          onClick={handleAudioPlayState}
          icon={song.active ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => {
            handleCurrentSongIndex(1);
          }}
          className="nextSong playerControl"
          icon={faForward}
          size="2x"
        />
      </div>
      <audio
        onLoadedMetadata={handleSongInfo}
        onTimeUpdate={handleSongInfo}
        ref={refAudio}
        src={song.audio}
      />
    </div>
  );
}
