import axios from "axios";

const Fetch = ( movieId, addition ) => {
    const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    
    const response = axios.get(
        `${BASE_URL}${movieId}${addition}?api_key=${API_KIY}&language=en-US`
      );
  
    return response
}

export default Fetch;