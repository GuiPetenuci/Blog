import { Grid } from "@material-ui/core";
import { PostList } from "../../components/PostList";

export function Home() {
  return (
    <div id="home-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Blog de noticias e conteudos</h1>
        </Grid>
        <Grid item xs={12}>
          <PostList />
        </Grid>
      </Grid>
    </div>
  );
}
