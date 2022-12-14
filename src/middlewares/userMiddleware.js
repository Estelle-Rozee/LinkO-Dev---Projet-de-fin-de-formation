import axios from 'axios';
import { GET_USER_INFOS, actionSaveEmailUser, CHANGE_MY_EMAIL, CHANGE_MY_PASSWORD, actionResetRegisterForm, actionMessageUserProfile} from 'src/actions/user';

import {authHeader} from "src/services/authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_USER_INFOS: {
      axios.get(API_URL + "/me", 
          { /*Headers */
            headers: authHeader() 
          })

        .then((response) => { 
          store.dispatch(actionSaveEmailUser(response.data.email));
        }).catch((error) => {
          alert(error.message);
      });
      break;
    }

    case CHANGE_MY_EMAIL: {

      const { user: {email, newEmail, password, } } = store.getState();

      axios.put(API_URL + "/me", 
          { /* Body */ 
          email: email,
          password: password,
          update: {
                    email: newEmail
                }
          },
      
          { /*Headers */
            headers: authHeader() 
          }).then((response) => { 
          store.dispatch(actionMessageUserProfile(response.data.msg));
        }).catch((error) => {
          console.log(error);
          // store.dispatch(actionResetRegisterForm());
          store.dispatch(actionMessageUserProfile(error.response.data.error));
      });
      break;
    }

    case CHANGE_MY_PASSWORD: {

      const { user: { email, password, newPassword, confirmPassword } } = store.getState();

      axios.put(API_URL + "/me", 
          { /* Body */ 
          email: email,
          password: password,
          update: {
                      password: newPassword,
                      confirmPassword: confirmPassword
                    }
          },

          { /*Headers */
            headers: authHeader() 
          })
          .then((response) => { 
            // store.dispatch(actionResetRegisterForm());
            store.dispatch(actionMessageUserProfile(response.data.msg));
        }).catch((error) => {
          store.dispatch(actionMessageUserProfile(error.response.data.error));
      });
      break;
    }

    default:
  }

  return next(action);
};

export default userMiddleware;
