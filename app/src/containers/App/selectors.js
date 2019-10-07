import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Selector to the `global` state domain
 */
const selectGlobal = state => state.global || initialState;

/**
 * Selector for the `router` state domain
 *
 * @return router object
 */
const selectRouter = state => state.router;

/**
 * Selector for the `loading` state domain
 *
 * @return loading boolean
 */
const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading
  );

/**
 * Selector for the `error` state domain
 *
 * @return loading boolean | error object
 */
const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error
  );

/**
 * Selector for the `campaigns` on the `feedData` state domain
 *
 * @return empty array | array of campaign objects
 */
const makeSelectCampaigns = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.feedData.campaigns
  );

/**
 * @typedef {Object<string>} LocationProps
 * @property {string} pathname
 * @property {string} search
 * @property {string} hash
 */
/**
 * Selector for the `location` property on the router state
 *
 * @return {LocationProps} location
 */
const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location
  );

export {
  selectGlobal,
  selectRouter,
  makeSelectLoading,
  makeSelectError,
  makeSelectCampaigns,
  makeSelectLocation
};
