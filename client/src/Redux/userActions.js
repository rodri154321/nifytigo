import axios from 'axios';

const createUserStart = () => ({
  type: 'CREATE_USER_START',
});

const createUserSuccess = (user) => ({
  type: 'CREATE_USER_SUCCESS',
  payload: user,
});

const createUserFailure = (error) => ({
  type: 'CREATE_USER_FAILURE',
  payload: error,
});

export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch(createUserStart());
    // Hacer la llamada al servidor para crear el usuario utilizando Axios
<<<<<<< HEAD
    const response = await axios.post('http://localhost:3001/users', userData,
    //const response = await axios.post('https://nifytigo.onrender.com/users', userData,
=======
    //const response = await axios.post('http://localhost:3001/users', userData,
    const response = await axios.post('https://nifytigoserver.onrender.com/users', userData,
>>>>>>> 62e7e8e5a4868706b48a702db2c84be7faea577b
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(createUserSuccess(response.data));
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};
