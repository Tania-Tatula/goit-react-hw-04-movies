import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import BtnBack from "../components/BtnBack";
import Fetch from "../servises/Fetch";
// import axios from "axios";

class MovieDetailsPage extends Component {
  state = {
    genres: [],
    id: null,
    title: null,
    poster_path: null,
    overview: null,
    popularity: null,
    release_date: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    // const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";
    // const response = await axios.get(
    //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KIY}&language=en-US`
    // );
    // console.log(response.data);

    const response = await Fetch(movieId);
    this.setState({ ...response.data });
  }

  render() {
    const {
      genres,
      id,
      title,
      poster_path,
      overview,
      vote_average,
      release_date,
    } = this.state;
    const { match } = this.props;
    const date = `${release_date}`.substr(0, 4);

    return (
      <>
        <BtnBack />

        <div key={id} className='MoviePage'>
          <div className='MoviePage-img-block'>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                className='MoviePage-img'
              />
            ) : (
              <p className='MoviePage-noimg'>No photo</p>
            )}
          </div>
          <div className='MoviePage-block'>
            <h1>
              {title} ({date})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='MoviePage-menu'>
          <h2>Additional information</h2>

          <ul>
            <li>
              <NavLink
                to={`${match.url}/cast`}
                className='NavLink'
                activeClassName='NavLink-activ'
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/reviews`}
                className='NavLink'
                activeClassName='NavLink-activ'
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${match.path}/cast`} component={Cast} />

            <Route exact path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
