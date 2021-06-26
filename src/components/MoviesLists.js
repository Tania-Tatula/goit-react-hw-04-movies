import { Link } from "react-router-dom";

const MoviesLists =({lists, url}) => {
    let movieUrl = url.includes('movies') ? '' : 'movies';
return( 
lists.map(movie => <li key ={movie.id}>
    <Link to={`${url}${movieUrl}/${movie.id}`} >{movie.title}</Link>
    </li>)
)
}
export default MoviesLists;