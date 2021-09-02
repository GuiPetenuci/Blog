import { PostModel } from "../models/post-model";
import { database } from "./firebase";

export function PostService() {
  async function CreatePost(post: PostModel) {
    const postRef = database.ref("Posts");
    const firebaseRoom = await postRef.push({
      Title: post.Title,
      Description: post.Description,
      Content: post.Content,
      Author: post.Author,
      CreationDate: post.CreationDate.toJSON(),
    });

    return firebaseRoom.key;
  }

//   async function GetPost(postId: string) {
//     const postRef = database.ref(`Posts/${postId}`);
//     let post: PostModel;
//     postRef
//       .once("value")
//       .then((dt) => {
//         const databasePost = dt.val();
//         post = {
//           Id: databasePost.Id,
//           Author: databasePost.author,
//           Title: databasePost.Title,
//           Description: databasePost.Description,
//           Content: databasePost.Content,
//           CreationDate: databasePost.CreationDate,
//         };
//       });
//   }

  return { CreatePost };
}
