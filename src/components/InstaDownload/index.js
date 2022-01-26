import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PostPreview from "./PostPreview";
import styles from "./index.module.scss";

function InstaDownload() {
  const [showPreview, setShowPreview] = useState(false);
  const [postData, setPostData] = useState({});

  async function handleSearchClick(searchUrl) {
    try {
      const data = await fetch("/p/CVxtR4UIneS/?__a=1").then((res) =>
        res.json()
      );
      console.log(data);

      if (data) {
        setShowPreview(true);
        setPostData(data?.graphql?.shortcode_media);
      }
    } catch (e) {
      console.log(e);
      setShowPreview(true);
      setPostData(null);
    }
  }

  return (
    <div className={styles.wrapper}>
      <SearchBar handleSearchClick={handleSearchClick} />
      {showPreview ? <PostPreview postData={postData} /> : null}
    </div>
  );
}

export default InstaDownload;
