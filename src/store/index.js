import { createStore } from "redux";
import reducer from "../reducers";
const initialState = {
    user: {
      name: "Deepali Rai",
      description: "Software Engineer, Speaker, and Occasional Model",
      likes: "Cats, Wine, and Black dresses",
      location: "localhost"
    }
  };
  
 export const store = createStore(reducer, initialState);