import { CHANGED_NAME, GET_DATA } from "../Redux/types";

export const changedName = nama => {
  return {
    type: CHANGED_NAME,
    payload: nama
  };
};

export const getData = data => {
  return {
    type: GET_DATA,
    payload: data
  };
};
