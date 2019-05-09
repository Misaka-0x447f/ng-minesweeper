import {UnixTimeStamp} from "../interfaces";

export const getTimestamp = () => {
  return new Date().getTime() as UnixTimeStamp;
};
