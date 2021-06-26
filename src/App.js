import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import AppBar from "./components/AppBar";
import "./style.css";
import routes from "./routes";

const App = () => {
  return (
    <div className='App'>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Route component={HomeView} />
      </Switch>
    </div>
  );
};

export default App;
