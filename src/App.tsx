import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminRoom } from "./pages/admin/AdminRoom";
import { CreatePost } from "./pages/admin/create-post/CreatePost";
import { Home } from "./pages/home/Home";
import { Post } from "./pages/post/Post";
import { PostList } from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={AdminRoom} />
        <Route path="/admin/posts/create" component={CreatePost} />
        <Route path="/posts" component={PostList} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
