import { Component } from "react";
import axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KIY}&language=en-US`
    );
    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className='Actor-list'>
          {cast.map((actor) => (
            <li key={actor.id} className='Actor-item'>
              <img
                className='Actor-img'
                src={"https://image.tmdb.org/t/p/w400" + actor.profile_path}
                alt={actor.name}
              ></img>
              <h2>{actor.name}</h2>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
