import Homepage from "./HomePage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadArticles from "./ReadArticles";
import CreateForm from "./CreateForm";

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
            <Route path={"/create-form"}>
              <CreateForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
