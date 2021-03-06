import { ACTION_STRING } from "./actionString";
import { getProfile,updateImage,updateProfile } from "../../utils/user";

export const getProfileAction = (param) => {
//   console.log('param', updateProfile(param));
    return {
      type: ACTION_STRING.userProfile,
      payload: getProfile(param),
    };
  };

  export const updateProfileAction = (token, body) => {
      console.log('param', token, body);
        return {
          type: ACTION_STRING.updateProfile,
          payload: updateProfile(token, body),
        };
      };

      export const updateImageAction = (token, body) => {
        console.log('param', token, body, updateImage);
          return {
            type: ACTION_STRING.updateProfile,
            payload: updateImage(token, body),
          };
        };