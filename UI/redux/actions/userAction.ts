import axios from 'axios'
import { GET_USERS, USERS_ERROR } from '../types'

export const getUsers = () => async (dispatch: any) => {

  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  }
  catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    })
  }

}