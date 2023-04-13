import Homepage from "./HomePage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadArticles from "./ReadArticles";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}
