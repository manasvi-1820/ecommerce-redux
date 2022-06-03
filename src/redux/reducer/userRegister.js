import { USER_REGISTER } from "../constants/ActionTypes";

const initialState = {
  userProfile: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    telephone: "",
    hobbies: [],
    gender: "",
    city: "",
    state: "",
    pincode: "",
  },
  // userProfile: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      console.log("user_register_action", action.payload);
      return {
        ...state,
        userProfile: action.payload,
        // ...state,
        // userProfile: [...state.userProfile, action.payload],
        // formSubmitted: false, // after update user formsubmition reset
      };
    default:
      return state;
  }
};

export default userReducer;
