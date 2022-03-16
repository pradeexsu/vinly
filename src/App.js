import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";
import NewMovie from "./components/NewMovie";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>

        <Route path="/add-movie" component={NewMovie} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/movies" component={Movies} />
        <Route path="/not-found" component={() => <h1>404 - not found</h1>} />
        <Redirect path="/" exact to="/movies" />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
