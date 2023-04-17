import Homepage from "./pages/HomePage";
import ReadArticles from "./pages/ReadArticles";
import CreateBlogPost from "./pages/CreateBlogPost";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div>
          <Switch>
            <Route exact path={"/"}>
              <Homepage />
            </Route>
            <Route path={"/blogs/:id"}>
              <ReadArticles />
            </Route>
            <Route path={"/create-blog"}>
              <CreateBlogPost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
