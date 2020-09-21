import api from "../api/api";
import { CHECK_USERNAME } from "../api/apiEndPoint";
//v1/login/

export const checkUserName = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    const userNameEndpoint = CHECK_USERNAME + `/${data}`;
    api
      .get(userNameEndpoint)
      .then((response, error) => {
        dispatch(userName(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const storeUserName = (data) => async (dispatch) => {
  dispatch(saveUserName(data));
};

export function setLoading(status) {
  return {
    status,
    type: "SET_LOADING",
  };
}

export function userName(payload) {
  return {
    type: "USER_NAME",
    userNameData: payload,
  };
}

export function saveUserName(payload) {
  console.log("gggggggg0000", payload);
  return {
    type: "SAVE_USER_NAME",
    saveUserName: payload,
  };
}
