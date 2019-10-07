import { createSelector } from "reselect";
import { initialState } from "./reducer";

// NOTE: might need to keep track of which video is playing via state
// e.g. don't want two videos to play at once
// will have to revisit once the video components/iframes are added

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
