import { Component } from "react";
// import axios from "axios";
import Fetch from "../../servises/Fetch";

class Reviews extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Fetch(movieId, "/reviews");

    this.setState({ authors: response.data.results });
  }

  render() {
    const { authors } = this.state;

    return (
      <>
        <ul>
          {!authors.length ? (
            <h2>We don't any reviews for this movie</h2>
          ) : (
            authors.map((author) => (
              <li key={author.id}>
                <h2>Author: {author.author}</h2>
                <p>'{author.content}'</p>
              </li>
            ))
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
