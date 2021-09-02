import { PostListItem } from "./PostListItem";
import { usePost } from "../hooks/usePost";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export function PostList() {
  const classes = useStyles();
  const { posts } = usePost();

  return (
    <div className={classes.root}>
      {posts.map((post) => {
        return (
          <PostListItem
            key={post.Id}
            Id={post?.Id}
            Title={post?.Title}
            Description={post?.Description}
          />
        );
      })}
    </div>
  );
}
