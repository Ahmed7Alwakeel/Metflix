
import axios from "axios";
export default function getMovies(pages){

    return (dispatch)=>{

        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=9f88bf74a43bfc37f66724aa8369bbe1&page=${pages}`)   
        .then((res) =>dispatch({type:"SET_MOVIES",payload:res.data.results}))
        .catch((err) => console.log(err));

    }
}