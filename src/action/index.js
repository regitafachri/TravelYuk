import axios from "axios";

export const LOGIN = "LOGIN";
export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: LoginApi(email, password)
  };
};

const LoginApi = (email, password) => {
  const url = "http://api.codefazz.com/api/Users/login";
  const Data = {
    Email: email,
    Password: password
  };

  return axios
    .post(url, Data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const SIGNUP = "SIGNUP";
export const signup = (email, password) => {
  console.log("regita");
  return {
    type: SIGNUP,
    payload: RegisterApi(email, password)
  };
};

const RegisterApi = (email, password) => {
  const url = "http://api.codefazz.com/api/Users";
  const Data = {
    Email: email,
    Password: password
  };

  return axios
    .post(url, Data)
    .then(response => {
      console.log("123444");
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const TRAVELPACKAGE = "TRAVELPACKAGE";
export const travelPackage = () => {
  return {
    type: TRAVELPACKAGE,
    payload: getDataTravel()
  };
};

const getDataTravel = () => {
  const url = "http://api.codefazz.com/api/travel_packages";
  return axios
    .get(url)
    .then(res => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const PACKAGEDETAIL = "PACKAGEDETAIL";
export const packagedetail = () => {
  return {
    type: PACKAGEDETAIL,
    payload: getDatadetail()
  };
};

const getDatadetail = id => {
  const url = `http://api.codefazz.com/api/travel_packages/${id}`;
  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const PACKAGEDETAILPOST = "PACKAFEDETAILPOST";
export const packagedetailPost = data => {
  return {
    type: PACKAGEDETAILPOST,
    payload: postDataDetail(data)
  };
};

const postDataDetail = data => {
  const url = "http://api.codefazz.com/api/travel_orders";
  return axios
    .post(url, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const CART = "CART";
export const cart = () => {
  return {
    type: CART,
    payload: getDataOrder()
  };
};

const getDataOrder = () => {
  const url = "http://api.codefazz.com/api/travel_orders";
  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
