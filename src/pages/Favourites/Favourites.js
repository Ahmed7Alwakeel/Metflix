import React from "react";
import { useSelector } from "react-redux";
import MovieShow from "./../../components/movieShow"


const Favourites = ({history}) => {
 
const logout = () => {
    history.push("/register");
    localStorage.removeItem("auth");
  }; 
  const { favMovies } = useSelector((state) => state.favMovies);
  
  return (
   
    <div className="container mt-2">
    <div className="row">
        {favMovies.length!==0
          ? favMovies.map((i) => <MovieShow movieProp={i} key={i.id} deleteProp/>)
          : <div className="col-12 text-center mt-5 mb-5 mx-auto fw-bolder"> List Empty</div>
        }
      </div>
      </div>
  
  );
};

export default Favourites;













 // const logout = () => {
  //   history.push("/register");
  //   localStorage.removeItem("auth");
  // };   put {history} as a parameter