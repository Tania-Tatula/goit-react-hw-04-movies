import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ lists, match, location }) => {
  let movieUrl = match.url.includes("movies") ? "" : "movies";
  return lists.map((movie) => (
    <li key={movie.id}>
      <NavLink
        to={{
          pathname: `${match.url}${movieUrl}/${movie.id}`,
          state: { from: location },
        }}
      >
        {movie.title}
      </NavLink>
    </li>
  ));
};

MoviesList.propTypes = {
  lists: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};


export default withRouter(MoviesList);
