import { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";



class MovieDetailsPage extends Component {
    state = {
        genres:[],
        id: null,
        title: null,
        backdrop_path: null,
        overview: null,


    }
    

    async componentDidMount(){
        const API_KIY = '0823a515d685f87a50f7a5f1575b73b6';
        const{movieId} = this.props.match.params;

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KIY}&language=en-US`);
  console.log(response.data);
      this.setState({...response.data})
      }

    render(){
        const {genres,
            id,
            title,
            backdrop_path,
            overview} = this.state;
        const imgUrl = `${backdrop_path}`;
        const baseImgUrl = 'https://image.tmdb.org/t/p/w400' + imgUrl;

    return (
        <>
        <div key ={id}>
            <h1>{title}</h1>
            <img src ={baseImgUrl} alt={title}></img>
            <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>

        <div>
            <h2>Additional information</h2>

            <ul>
                <li><Link to={`${this.props.match.url}/cast`}>Cast</Link></li>
                {/* <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li> */}
            </ul>
            <Route exact path='/movies/:movieId/cast' component={Cast} />
        {/* <Route exact path={`${this.props.match.path}/reviews`}  component={Reviews}/> */}

        </div>

            </div>
        </>
    )
}
}

export default MovieDetailsPage;