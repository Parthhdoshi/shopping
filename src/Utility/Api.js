import axios from "axios";

export const fetchAllMaterial = async () => {
  try {
    const data = await axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material");
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      sessionStorage.removeItem("JWT")
      window.location.href = "/"
    }
    throw Error("Unable to fetch data");
  }
};

export const fetchAllColor = async () => {
  try {
    const data = await axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors");
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/"
    }
    throw Error("Unable to fetch data");
  }
};

export const fetchAllProduct = async () => {
  try {
    const data = await axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products");
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/"
    }
    throw Error("Unable to fetch data");
  }
};

export const fetchAllFeaturedProduct = async () => {
  try {
    const data = await axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured");
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/"
    }
    throw Error("Unable to fetch data");
  }
};