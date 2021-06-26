import { Component } from "react";
import axios from "axios";
import MovieSerch from "../components/MovieSertch";
import MoviesList from "../components/MoviesList";

class MoviesPage extends Component {
  state = {
    movies: [],
    movieQuery: "",
    imagesPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieQuery !== this.state.movieQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      movieQuery: query,
    });
  };

  async fetchMovies() {
    const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";
    const { movieQuery } = this.state;

    const response = await axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=${API_KIY}&language=en-US&page=1&include_adult=false&query=${movieQuery}`
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <MovieSerch onSubmit={this.onChangeQuery} />

        {/* {this.state.movies.map(movie => <li key ={movie.id}>
            <Link to={`${this.props.match.url}/${movie.id}`} >{movie.title}</Link>
            </li>)} */}
        <ul className='movies-lists'>
          <MoviesList lists={this.state.movies} />
        </ul>
      </>
    );
  }
}

export default MoviesPage;
