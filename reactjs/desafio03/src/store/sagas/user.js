import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import UserActions from "../ducks/user";

export function* getUserRequest({ user }) {
  try {
    const coordinates = yield select(state => state.user.coordinates);

    const response = yield call(api.get, `/${user}`);

    // eslint-disable-next-line max-len
    const isDuplicated = yield select(state =>
      state.user.data.find(user => user.id === response.data.id)
    );

    if (isDuplicated) {
      yield put(UserActions.getUserFailure("Duplicado"));
    } else {
      const { id, login, avatar_url, name } = response.data;
      const userToAdd = {
        id,
        login,
        avatar_url,
        name,
        coordinates
      };

      yield put(UserActions.closeUserModal());
      yield put(UserActions.getUserSuccess(userToAdd));
    }
  } catch (err) {
    yield put(UserActions.getUserFailure("Erro ao adicionar usuário"));
  }
}
