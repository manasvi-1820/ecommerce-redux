import { USER_REGISTER } from "../constants/ActionTypes";

export const userRegister = (register) => {
  console.log("userregister", register);
  return {
    type: USER_REGISTER,
    payload: register,
  };
};
