import { Component } from "react";
import axios from "axios";


class Reviews extends Component {
    state = {
        authors:[],

    }
    

    async componentDidMount(){
        const API_KIY = '0823a515d685f87a50f7a5f1575b73b6';
        const{movieId} = this.props.match.params;

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KIY}&language=en-US&page=1`);
  console.log(response.data.results);
      this.setState({authors: response.data.results})
      }

    render(){
        const {authors} = this.state;

    return (
        <>
<ul>
    {authors.map(author =>        
    <li key={author.id}>
        <h2>Author: {author.author}</h2>
        <p>'{author.content}'</p>
        
    </li>
    )}
</ul>

        </>
    )
}
}

export default Reviews;