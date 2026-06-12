import * as actions from "./ActionTypes";

export const reducer = (state, action) => { // تم جعل الاسم reducer بحرف صغير ليتطابق مع الاستيراد في Context
    switch(action.type) { // تصحيح حرف t صغير
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload) // تصحيح state.watchlist و action
            };
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID), // تصحيح الفلترة للـ watchlist
                watched: [action.payload, ...state.watched]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.imdbID !== action.payload) // تصحيح الفلترة للـ watched
            };
        default:
            return state;
    }
};
