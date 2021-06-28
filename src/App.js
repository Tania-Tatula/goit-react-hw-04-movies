import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import AppBar from "./components/AppBar";
import "./style.css";
import routes from "./routes";

const HomeView = lazy(() =>
  import("./views/HomeView" /*webpackChunkName *home-view**/)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /*webpackChunkName *movies-page**/)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /*webpackChunkName *movie-details-page**/)
);

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.moviesPage} component={MoviesPage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
