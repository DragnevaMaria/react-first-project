import React, { useContext } from "react";
import { LikesPostsContext } from "./App";

export function LikedPostsList() {
  const { likedPosts } = useContext(LikesPostsContext);

  return (
    <div>
      <h3>Liked Posts:</h3>
        {likedPosts.map((post) => (
            <div>
                <br />
                <li key={post.id}>
                    Post ID: {post.id}, Likes: {post.likes} 
                </li>
            </div>
        ))}
    </div>
  );
}
