import { NavLink, withRouter } from "react-router-dom";

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
export default withRouter(MoviesList);
