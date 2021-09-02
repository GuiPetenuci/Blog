import { Grid } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import "./post.scss";

type RoomParams = {
  id: string;
};

export function Post() {
  const params = useParams<RoomParams>();
  const postId = params.id || undefined;
  const { post } = usePost(postId);

  return (
    <Grid id="post" container spacing={3}>
      <Link to="/posts">Return to posts page</Link>
      <Grid className="post-title" item xs={12}>
        <h1>{post?.Title}</h1>
      </Grid>
      <Grid item xs={12}>
        <h2>{post?.Description}</h2>
      </Grid>
      <Grid item xs={12}>
        <p>{post?.Content}</p>
      </Grid>
    </Grid>
  );
}
