import invariant from "invariant";
import { isEmpty, isFunction, isString } from "lodash";

import checkStore from "./checkStore";
import createReducer from "../reducers";

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) {
      checkStore(store);
    }

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      "(utils...) injectReducer: Expected `reducer` to be a reducer function"
    );

    // Check `store.injectedReducers[key] === reducer`
    // primarily for hot reloading: when a reducer has changed/a key is unchanged
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    ) {
      return;
    }

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true)
  };
}
