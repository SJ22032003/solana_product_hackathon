import axios from "axios";
import errorMessage from "../../components/common/Notification";

const url_Gstin = process.env.REACT_APP_BASE_GSTIN;
const url_Tags = process.env.REACT_APP_BASE_TAGS;

// Add GSTIN List
export const addGstinList = async (action) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc2NWM4NzBiMjE0ODBiZDU2M2ZlODIiLCJuYW1lIjoicHJhdGVlayIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMDdUMTE6NDg6MjQuMzE3WiIsInVwZGF0ZWRBdCI6IjIwMjItMDUtMDdUMTU6MjM6MzUuNDEyWiIsImlhdCI6MTY1MjA3ODQ0MH0.d9jXfIR48_tIvCezreF95fXh6R-4CCkiMW8gBVhxtNQ",
    "Content-Type": "application/json",
  };

  const { gstin, tags } = action?.payload;

  console.log(tags, "tags");

  let bodyContent = JSON.stringify({
    gstin: gstin,
    tags: tags,
    user: "prateek@test.com",
  });

  let reqOptions = {
    url: `${url_Gstin}/add`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };
  let response;
  try {
    response = await axios.request(reqOptions);
    errorMessage(
      "GSTIN Import Request",
      "We have taken your request and will send you an email once all GSTIN is processed",
      "success"
    );
    action.history("/gstin");
    return response.data;
  } catch (error) {
    errorMessage("Error", "Some of your GSTIN Numbers might be invalid", "danger", 5000);
  }
};

// GET GSTIN User
export const getGstinUser = async (action) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let searchBy = action?.payload ? action.payload : "";

  let reqOptions = {
    url: `${url_Gstin}/`,
    params: {
      skip: 0,
      limit: 20,
      download: true,
      searchText: searchBy,
      tags: ["628df7b40fedcce4178cb227"],
      type: "regular",
      user: "prateek@test.com",
    },
    method: "GET",
    headers: headersList,
  };

  try {
    let response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    errorMessage("Error", error.message, "danger");
  }
};

// ADD Tags List
export const addTagsList = async (action) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: action.payload.tagname,
    description: action.payload.tagdescription,
    user: "prateek@test.com",
  });

  let reqOptions = {
    url: `${url_Tags}/add`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };
  try {
    let response = await axios.request(reqOptions);
    errorMessage("Success", "Tag Added", "success");
    return response.data;
  } catch (error) {
    errorMessage("Error", error.message, "danger");
  }
};

// GET Tags List
export const getTagsList = async () => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let reqOptions = {
    url: `${url_Tags}/list?user=prateek@test.com`,
    method: "GET",
    headers: headersList,
  };
  try {
    let response = await axios.request(reqOptions);
    return response?.data;
  } catch (error) {
    errorMessage("Error", error.message, "danger");
  }
};

// Delete User
export const deleteUser = async (action) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    gstin: action.payload,
    user: "prateek@test.com",
  });

  let reqOptions = {
    url: "https://test1.taxadda.com/api/gstin/delete",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };
  try {
    let response = await axios.request(reqOptions);
    errorMessage("User Removed", "Successfully deleted GSTIN User", "Success");
    return response;
  } catch (error) {
    errorMessage("Error", error.message, "danger");
  }
};
