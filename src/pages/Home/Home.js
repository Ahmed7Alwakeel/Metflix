import React, { useState} from "react";
import MovieShow from "./../../components/movieShow"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getMovies from './../../store/actions/movies';

const Home = () => {
  // const [movies, setMovies] = useState([]);
  
 
  const { movies } = useSelector((state) => state.movies);
  const dispatch =useDispatch();
  let [pages, setP] = useState(1)
  //pagination
  function nextPage() {
    if (pages < 20){setP(++pages)}
  }
  function backPage() {
    if (pages > 1) {setP(--pages)}
  }

  // const getMovies = (page = 1) => {
  //   axiosInstance
  //     .get(`movie/popular?&page=${page}`)
  //     .then((res) => setMovies(res.data.results))
  //     .catch((err) => console.log(err));
  // };

 

 
    // getMovies();
    dispatch(getMovies(pages));
 
  return (
    <div className="container mt-2">
        <div className="row">

          <div className="col-md-11 col-9 mb-2" >
            <button className={`btn btn-danger ${pages<2 && "d-none"}`} onClick={() => { backPage() }}>Back</button>
          </div>

          <div className="col-md-1 col-3 mb-2">
            <button className="btn btn-danger" onClick={() => { nextPage() }}>Next</button>
          </div>

          {movies.map((i) => <MovieShow movieProp={i} key={i.id} />) }

          <div className="col-md-11 col-9 mb-2" >
            <button className={`btn btn-danger ${pages<2 && "d-none"}`} onClick={() => { backPage() }}>Back</button>
          </div>

          <div className="col-md-1 col-3 mb-2">
            <button className="btn btn-danger" onClick={() => { nextPage() }}>Next</button>
          </div>


        </div>
      </div>
  );
};

export default Home;



