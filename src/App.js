import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
// import Cast from "./views/Cast";
// import Reviews from "./views/Reviews";
// import NotFoundView from "./views/NotFoundVievs";
import "./style.css";



const App = () => {
  return (
    <div className='App'>
      <ul>
        <li>
          <NavLink
            exact
            className='NavLink'
            activeClassName='NavLink-activ'
            to='/'
          >
            Homme
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className='NavLink'
            activeClassName='NavLink-activ'
            to='/movies'
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route exact path='/movies/:movieId' component={MovieDetailsPage} />
        {/* <Route exact path='/movies/:movieId/cast' component={Cast} />
        <Route exact path='/movies/:movieId/reviews' component={Reviews} /> */}
        {/* <Route component={HomeView} /> */}
      </Switch>
    </div>
  );
};

export default App;


// 0823a515d685f87a50f7a5f1575b73b6