import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the OfferFeed state domain
 */
const selectOfferFeedDomain = state => state.offerFeed || initialState;

/**
 * Default selector used by OfferFeed
 */
const makeSelectOfferFeed = () =>
  createSelector(
    selectOfferFeedDomain,
    substate => substate
  );

export default makeSelectOfferFeed;
export { selectOfferFeedDomain };
