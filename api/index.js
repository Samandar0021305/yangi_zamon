import Axios from "axios";
import { product } from "./baseUrl";
export const getProduct = async (params) => {
  try {
    const { data } = await Axios({
      url: product,
      params: params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
