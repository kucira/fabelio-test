import axios from "axios";
import { Config } from "../Config/index";

const instance = axios.create({
  baseURL: Config.BASE_URL
});

export const getDataFurniture = async (): Promise<any> => {
  const response = await instance({
    method: "GET",
    url: `${Config.ENDPOINT_HOME}`
  });
  return response.data;
};
