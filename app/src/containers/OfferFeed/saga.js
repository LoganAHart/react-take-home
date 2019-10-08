import { call, put, select, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { LOAD_CAMPAIGNS } from "containers/App/constants";
import { campaignsLoaded, campaignLoadingError } from "containers/App/actions";
import { makeSelectLocation } from "containers/App/selectors";
import request from "utils/request";

/**
 * Forwards the user to the provided `location`
 *
 * uses the `push` function by `connected-react-router`
 *
 * @param {string} location
 */
export function* forwardTo(location) {
  yield put(push(location));
}

export function* getCampaigns() {
  const requestURL = "https://www.plugco.in/public/take_home_sample_feed";
  const options = {
    method: "GET"
  };
  const currentLoc = yield select(makeSelectLocation());
  try {
    const response = yield call(request, ...[requestURL, options]);
    const { campaigns } = response;
    yield put(campaignsLoaded(campaigns));
    if (currentLoc.pathname === "/error") {
      yield forwardTo("/");
    }
  } catch (e) {
    yield put(campaignLoadingError(e));
    yield forwardTo("/error");
  }
}

export default function* offerFeedSaga() {
  yield takeLatest(LOAD_CAMPAIGNS, getCampaigns);
}
