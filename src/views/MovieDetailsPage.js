import { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import BtnBack from "../components/BtnBack";

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
    const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KIY}&language=en-US`
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }


  render() {
    const { genres, id, title, poster_path, overview, popularity, release_date } = this.state;
    const imgUrl = `${poster_path}`;
    const baseImgUrl = "https://image.tmdb.org/t/p/w300" + imgUrl;
    const {match} = this.props;
    const date = (`${release_date}`).substr(0, 4);


    return (
      <>
      <BtnBack />

        <div key={id}>
          <h1>{title} ({date})</h1>
          <p>User Score: {Math.round(popularity)}%</p>
          <img src={baseImgUrl} alt={title}></img>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>

          <div>
            <h2>Additional information</h2>

            <ul>
              <li>
                <Link to={`${match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>

            <Switch>
              <Route
                exact
                path={`${match.path}/cast`}
                component={Cast}
              />

              <Route
                exact
                path={`${match.path}/reviews`}
                component={Reviews}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
