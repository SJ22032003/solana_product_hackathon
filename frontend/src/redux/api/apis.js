import axios from "axios";
import errorMessage from "../../components/common/Notification";

const url_Gstin = process.env.REACT_APP_BASE_GSTIN;
const url_Tags = process.env.REACT_APP_BASE_TAGS;
const baseurl = process.env.REACT_APP_BASE_URL;

// Signup
export const signup = async (action) => {
  console.log(action.payload);
  let bodyContent = JSON.stringify({
    username: action.payload.username,
    password: action.payload.password,
  });

  let requestOption = {
    url: `${baseurl}/signup`,
    method: "POST",
    data: bodyContent,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const resp = await axios.request(requestOption);
    action.history.push("/dashboard");
    console.log(resp);
    return resp;
  } catch (error) {
    errorMessage("Error", "Not working", "danger", 5000);
  }
};


export const login = async (action) => {
  let bodyContent = JSON.stringify({
    username: action.payload.username,
    password: action.payload.password,
  });

  let requestOption = {
    url: `${baseurl}/login`,
    method: "POST",
    data: bodyContent,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const resp = await axios.request(requestOption);
    console.log(resp);
    return resp;
  } catch (error) {
    errorMessage("Error", "Not working", "danger", 5000);
  }
}

export const getWallet = async (action) => {
  
}