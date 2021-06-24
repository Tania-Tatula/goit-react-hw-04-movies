import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";


class HomeView extends Component {
state ={
    moviesPopular: [],
}

  async componentDidMount(){
    const API_KIY = '0823a515d685f87a50f7a5f1575b73b6';
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KIY}`);

    this.setState({moviesPopular: response.data.results})
    }




    render(){
    return (
<>
    <ul>
        {this.state.moviesPopular.map(movie => <li key ={movie.id}>
            <Link to={`${this.props.match.url}movies/${movie.id}`} >{movie.title}</Link>
            </li>)}
    </ul>
    </>
    )
}
}

export default HomeView;