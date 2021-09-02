import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

type PostItemType = {
  Id: string | null;
  Title: string | null;
  Description: string | null;
};

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 200,
  },
  title: {
    fontSize: 14,
  },
  description: {
    height: 65,
  },
  button: {
    backgroundColor: "#a9a9a9",
  },
});

export function PostListItem(props: PostItemType) {
  const classes = useStyles();
  const history = useHistory();

  async function handleReadPost() {
    history.push(`/post/${props.Id}`);
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.Title}
          </Typography>
          <Typography className={classes.description} color="textSecondary">
            {props.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            size="small"
            onClick={handleReadPost}
          >
            Ler a noticia
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
