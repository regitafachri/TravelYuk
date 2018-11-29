import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import {
  LOGIN,
  SIGNUP,
  TRAVELPACKAGE,
  PACKAGEDETAIL,
  PACKAGEDETAILPOST
} from "../action/index";

export const DataLogin = (
  state = {
    isFetching: false,
    items: {},
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };

    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        message: "Succes"
      };

    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "Failed"
      };
    default:
      return state;
  }
};

export const DataRegister = (
  state = {
    isFetching: false,
    items: {},
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${SIGNUP}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };

    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        message: "Succes"
      };

    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "Failed"
      };
    default:
      return state;
  }
};

export const travelPackage = (
  state = {
    isFetching: false,
    items: [],
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${TRAVELPACKAGE}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };
    case `${TRAVELPACKAGE}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        message: "succes"
      };
    case `${TRAVELPACKAGE}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "failed"
      };
    default:
      return state;
  }
};

export const packageDetail = (
  state = {
    isFetching: false,
    items: "",
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${PACKAGEDETAIL}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };
    case `${PACKAGEDETAIL}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        message: "succes"
      };
    case `${PACKAGEDETAIL}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "failed"
      };
    default:
      return state;
  }
};

export const packageDetailPost = (
  state = {
    isFetching: false,
    items: "",
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${PACKAGEDETAILPOST}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };
    case `${PACKAGEDETAILPOST}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        message: "succes"
      };
    case `${PACKAGEDETAILPOST}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "failed"
      };
    default:
      return state;
  }
};

export const cart = (
  state = {
    isFetching: false,
    items: {},
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${CART}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };
    case `${CART}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        message: "succes"
      };
    case `${CART}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "failed"
      };
  }
};

const rootReducer = combineReducers({
  DataLogin,
  DataRegister,
  travelPackage,
  packageDetail,
  packageDetailPost
});

export default rootReducer;
