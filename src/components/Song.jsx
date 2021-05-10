import React from "react";

export default function Song(props) {
  const { song } = props;
  return (
    <div>
      <div className="songContainer">
        <div
          className={
            song.active ? "title songPicture active" : "title songPicture"
          }
        >
          <img src={song.cover} alt="" />
        </div>
        <div className="title songName">{song.name}</div>
        <div className="title artist">{song.artist}</div>
      </div>
    </div>
  );
}
