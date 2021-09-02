import { useEffect, useState } from "react";
import { PostModel, FirebasePosts } from "../models/post-model";
import { database } from "../services/firebase";

export function usePost(postId?: string) {
  const [post, setPost] = useState<PostModel>();
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    if (postId) {
      const postRef = database.ref(`Posts/${postId}`);

      postRef.once("value").then((post) => {
        const databasePost = post.val();
        setPost({
          Id: databasePost.Id,
          Author: databasePost.author,
          Title: databasePost.Title,
          Description: databasePost.Description,
          Content: databasePost.Content,
          CreationDate: databasePost.CreationDate,
        });
      });
    } else {
      const postRef = database.ref(`Posts`).orderByKey();

      postRef.on("value", (post) => {
        const databasePost = post.val();
        const firebasePosts: FirebasePosts = databasePost ?? {};

        const parsedPosts = Object.entries(firebasePosts).map(
          ([key, value]) => {
            return {
              Id: key.toString(),
              Author: value.Author,
              Title: value.Title,
              Description: value.Description,
              Content: value.Content,
              CreationDate: value.CreationDate,
            };
          }
        );
        setPosts(parsedPosts);
      });
      return () => {
        postRef.off("value");
      };
    }
  }, [postId]);

  return { post, posts };
}
