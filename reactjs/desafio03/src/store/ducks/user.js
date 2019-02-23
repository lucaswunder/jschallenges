import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  openUserModal: null,
  closeUserModal: null,
  getUserRequest: ["user"],
  getUserSuccess: ["data"],
  getUserFailure: ["msg"],
  removeUser: ["id"],
  getUserCoordinates: ["latitude", "longitude"]
});

export const UserTypes = Types;

export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  userModalOpen: false,
  coordinates: null,
  failure: null
});

/* Reducers */

export const getCoordinates = (state, { latitude, longitude }) => {
  return { ...state, coordinates: { latitude, longitude } };
};

export const getSuccess = (state, { data }) => {
  return { ...state, data: [...state.data, data] };
};

export const remove = (state, { id }) => {
  return { ...state, data: state.data.filter(user => user.id !== id) };
};

export const openModal = state => {
  return { ...state, userModalOpen: true };
};

export const closeModal = state => {
  return { ...state, userModalOpen: false, failure: null };
};

export const getFailure = (state, { msg }) => {
  return { ...state, failure: msg };
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_USER_MODAL]: openModal,
  [Types.CLOSE_USER_MODAL]: closeModal,
  [Types.GET_USER_SUCCESS]: getSuccess,
  [Types.REMOVE_USER]: remove,
  [Types.GET_USER_COORDINATES]: getCoordinates,
  [Types.GET_USER_FAILURE]: getFailure
});
