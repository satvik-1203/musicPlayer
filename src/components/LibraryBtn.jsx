import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { MusicContext } from "../App";

export default function LibraryBtn({ libraryState }) {
  const { handleLibraryState } = useContext(MusicContext);
  return (
    <button
      onClick={handleLibraryState}
      className={libraryState ? "btn libraryBtn active" : "btn libraryBtn"}
    >
      Library <FontAwesomeIcon icon={faMusic} />
    </button>
  );
}
