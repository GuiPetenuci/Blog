import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PostModel } from "../../../models/post-model";
import { PostService } from "../../../services/post.service";

import "./create-post.scss";

export function CreatePost() {
  const history = useHistory();
  const postService = PostService();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostModel>({
    defaultValues: {
      Title: "",
      Content: "",
      Description: "",
      Author: "Guilherme",
      CreationDate: new Date(),
    },
  });

  async function onSubmitHandler(dt: PostModel) {
    postService.CreatePost(dt).then((key) => {
      console.log("postCreated: ", key);

      history.push(`/post/${key}`);
    });
  }

  return (
    <div className="content">
      <h1>Create new post.</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Controller
          control={control}
          name="Title"
          rules={{ required: true, minLength: 3 }}
          render={({ field, formState }) => (
            <TextField
              {...field}
              label="Title"
              error={!!formState.errors?.Title}
              helperText={
                (errors.Title?.type === "required" && "Title Required") ||
                (errors.Title?.type === "minLength" && "Min 3 characters")
              }
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name="Description"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} label="Description" />}
        />
        <br />
        <Controller
          control={control}
          name="Content"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} multiline rows={5} label="Content" />
          )}
        />
        <br />
        <Controller
          control={control}
          name="Author"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} label="Author" />}
        />
        <br />

        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
