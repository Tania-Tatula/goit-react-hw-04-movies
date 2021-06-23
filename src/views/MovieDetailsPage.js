import { Component } from "react";
import axios from "axios";


class MovieDetailsPage extends Component {
    state = {
        movieId: '',
        moviesPopular:[]
    }

    async componentDidMount(){
        // ${movie_id}
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=0823a515d685f87a50f7a5f1575b73b6&language=en-US`);
  console.log(response.data);
      this.setState({moviesPopular: response.data})
      console.log(this.state.moviesPopular);
      }

    render(){
        const {moviesPopular} = this.state;
        const imgUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
        <>
        <h1>MovieDetailsPage</h1>
        <div key ={moviesPopular.id}>
            <h1>{moviesPopular.title}</h1>
            {/* <img src =`${this.imgUrl}` alt={moviesPopular.title}></img> */}
            
            </div>


        </>
    )
}
}

export default MovieDetailsPage;