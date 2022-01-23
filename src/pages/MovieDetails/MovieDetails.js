
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Moviedetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9f88bf74a43bfc37f66724aa8369bbe1`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-3" key={movies.id} >
            <div className="card  ">
              <img className="mt-0" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
              <div className="card-body m-0">
                <h6 className="d-inline-block">Title: {movies.title}</h6><br />
                <h6 className="d-inline-block">Original Title: {movies.original_title}</h6><br />
                <h6 className="d-inline-block">Date: {movies.release_date}</h6><br />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Moviedetails;
