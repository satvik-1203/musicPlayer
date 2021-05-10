import React from "react";
import Library from "./Library";

export default function UILibrary({ songs, library }) {
  return (
    <div className={library ? "UILibrary active" : "UILibrary notActive"}>
      <h2 className="heading">Library</h2>
      <div className="songs">
        {songs.map((song) => (
          <Library song={song} />
        ))}
      </div>
    </div>
  );
}
