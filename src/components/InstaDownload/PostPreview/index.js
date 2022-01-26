import React from "react";
import Error from "../../Shared/Error";
import styles from "./index.module.scss";

function PostPreview({ postData }) {
  if (!postData) return <Error />;
  const type = postData["__typename"];

  function renderPostData() {
    switch (type) {
      case "GraphVideo":
        return <div> {postData.display_url} </div>;
      case "GraphImage":
        return "Image";
      case "GraphSidecar":
        const items = postData?.edge_sidecar_to_children?.edges;
        console.log(items);
        return (
          <div>
            {items?.map((item) => {
              return (
                <img
                  src={item.node.display_url}
                  key={item.node.display_url}
                  alt={item.node.display_url}
                ></img>
              );
            })}
          </div>
        );
      default:
        return <Error />;
    }
  }

  return <div className={styles.wrapper}> {renderPostData()} </div>;
}

export default PostPreview;
