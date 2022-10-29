import axios from "axios";

import baseURL from "../constants/url";

export const axiosService = axios.create({baseURL});
