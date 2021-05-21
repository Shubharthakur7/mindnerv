import { REHYDRATE } from "redux-persist";

let initState = {
  list: [],
  uslist: []

};

function shubhham(state = initState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: action.res,
      };
    case "US_ADD_ITEM":
      return {
        ...state,
        uslist: action.res,
      };
    case REHYDRATE:
      return {
        ...state,
        list: action.payload && action.payload.list ? action.payload.list : [],      
        uslist: action.payload && action.payload.uslist ? action.payload.uslist : [],
      };
    default:
      return {
        ...state,
      };
  }
}

export const reducer = shubhham;
