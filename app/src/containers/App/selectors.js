import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Selector to the `global` state domain
 */
const selectGlobal = state => state.global || initialState;

/**
 * Selector for the `router` state domain
 */
const selectRouter = state => state.router;

/**
 * Selector for the `location` property on the router state
 */
const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location
  );

export { selectGlobal, selectRouter, makeSelectLocation };
