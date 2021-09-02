export type PostModel = {
  Id: string | null;
  Title: string;
  Description: string;
  Content: string;
  Author: string;
  CreationDate: Date;
};

export type FirebasePosts = Record<
  string,
  {
    Title: string;
    Description: string;
    Content: string;
    Author: string;
    CreationDate: Date;
  }
>;


// postRef.once("value", (post) => {
    //   const listPosts: PostModel[] = [];
    //   post.forEach((x) => {
    //     const value = x.val();
    //     let postM: PostModel = {
    //       Id: x.key,
    //       Author: value.author,
    //       Title: value.title,
    //       Description: value.description,
    //       Content: value.description,
    //       CreationDate: value.creationDate,
    //     };
    //     listPosts.push(postM);
    //   });
