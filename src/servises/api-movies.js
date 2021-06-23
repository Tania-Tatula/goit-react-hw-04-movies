import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const API_KIY = "0823a515d685f87a50f7a5f1575b73b6";

const fetchImagesApi = ({
  searchQuery = "",
  imagesPage = 1,
  pageSize = 12,
}) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${imagesPage}api_key=${API_KIY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default fetchImagesApi;
