let initialState={
    favMovies:[]
}

export default function favReducer(state=initialState, action){
    switch (action.type) {
        case "ADD-TO-FAV":
            return {
                ...state,
                favMovies: [action.payload,...state.favMovies],
              };
    
        case 'REMOVE-FROM-FAV':
            return {
                ...state,
                favMovies: state.favMovies.filter( i=>i !==action.payload),
              };
        default:
          return state;
    }

}