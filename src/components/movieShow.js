import React, { useState} from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removefav } from "../store/actions/favourites";

const MovieShow = ({ movieProp, deleteProp }) => {
  const { id, poster_path, title,release_date} = movieProp;
  const history = useHistory();
  
  const { favMovies } = useSelector((state) => state.favMovies);

  let found = favMovies?.find((i) => i.id === movieProp.id);
  const [selected, setSelected] = useState(found ? true : false);

  const dispatch = useDispatch();

  const goToMovie = () => {
    history.push(`/movie-details/${id}`);
  };

  const toggleFav = (event) => {
    event.stopPropagation();
    dispatch(selected? removefav(movieProp):addToFavourites(movieProp));
    setSelected(!selected);
  };

  return (
    <div className="col-md-3">
    <div className="card mb-3">
      <img className="mt-0 imgCard" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <div className="card-body m-0">
        <i className={`fa ms-3 
        ${ selected && "text-warning"}
        ${deleteProp ?  "fa-trash text-danger":"fa-star"}
        `}
         onClick={(event) => toggleFav(event)}
          ></i><br/>
       
        <h6 className="d-inline-block title">Title: {title}</h6><br />
    
        <h6 className="d-inline-block">Date: {release_date}</h6><br />
        <button className="btn btn-primary mt-2"
          onClick={goToMovie}>Show Detials</button>
      </div>
    </div>
    </div>
  );
};

export default MovieShow;


