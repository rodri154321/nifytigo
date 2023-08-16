import { UPDATE_USER_DETAIL } from './actionTypes'; // Asegúrate de importar tus tipos de acciones correctamente

export const updateUserDetail = (updatedUserDetail) => {
  return {
    type: UPDATE_USER_DETAIL,
    payload: updatedUserDetail,
  };
};