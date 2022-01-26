import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar({ handleSearchClick }) {
  const [searchTerm, serSearchTerm] = useState("");
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Paste the link here"
        value={searchTerm}
        onChange={(e) => serSearchTerm(e.target.value)}
        className={styles.input}
      ></input>
      <div
        className={styles.searchImageContainer}
        onClick={() => handleSearchClick(searchTerm)}
      >
        <img src="/images/InstaDownload/SearchIcon.png" alt="search"></img>
      </div>
    </div>
  );
}

export default SearchBar;
