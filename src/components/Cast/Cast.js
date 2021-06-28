import { Component } from "react";
import Fetch from "../../servises/Fetch";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Fetch(movieId, "/credits");

    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className='Actor-list'>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className='Actor-item'>
              <div className='Actor-img-block'>
                {profile_path ? (
                  <img
                    className='Actor-img'
                    src={"https://image.tmdb.org/t/p/w400" + profile_path}
                    alt={name}
                  />
                ) : (
                  <p className='MoviePage-noimg'>No photo</p>
                )}
              </div>

              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
