import { CHANGED_NAME, GET_DATA } from "../types";

const initialState = {
  // items: [],
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_NAME:
      return { ...state, nama: action.payload };
    case GET_DATA:
      return {
        ...state,
        data: action.payload
        // , nama: action.payload.nama
      };
    //   case "UBAH_NAMA":
    //       return {state.name: action.payload}
    default:
      return state;
  }
};
