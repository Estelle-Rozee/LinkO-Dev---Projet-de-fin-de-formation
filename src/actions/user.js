export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';

/**
 * action dispatchée sur le onChange d'un input du Login form oudu Register form
 * @param {string} newValue : nouvelle valeur de l'input récupérée dans le event.target.value
 * @param {string} inputName : le nom de l'input et de l'emplacement de la valeur dans le
 * state (email, password), récupéré dans le event.target.name
 */

export const actionChangeInputValue = (newValue, inputName) => ({
  type: CHANGE_INPUT_VALUE,
  newValue: newValue,
  inputName: inputName,
});

/**
 * action dispatchée sur le submit du Login.  action interceptée par
 * un middleware pour qu'il interroge l'api sur la route /login
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});

/**
 * action dispatchée quand le authmiddelware reçoit une réponse du serveur /login
 * sauvegarde du token dans le state via le reducer
 * @param {string} token : le token à sauvegarder du user tout juste connecté
 */
export const actionSaveUser = (token) => ({
  type: SAVE_USER,
  token,
});

/**
 * action dispatchée au click sur le bouton se déconnecter du Header
 * le reducer doit supprimer le token enregistré dans le state et passer isLogged: false
 */
export const actionLogOut = () => ({
  type: LOG_OUT,
});
