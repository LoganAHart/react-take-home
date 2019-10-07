import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_CAMPAIGNS } from "containers/App/constants";
import { campaignsLoaded, campaignLoadingError } from "containers/App/actions";
import request from "utils/request";

export function* getCampaigns() {
  const requestURL = "https://www.plugco.in/public/take_home_sample_feed";
  const options = {
    method: "GET"
  };
  try {
    const response = yield call(request, ...[requestURL, options]);
    const { campaigns } = response;
    yield put(campaignsLoaded(campaigns));
  } catch (e) {
    // forward to retry page..
    yield put(campaignLoadingError(e));
  }
}

export default function* offerFeedSaga() {
  yield takeLatest(LOAD_CAMPAIGNS, getCampaigns);
}
