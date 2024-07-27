import instance from "../utils/request";
export const getAllItems = () => instance.get("/items");