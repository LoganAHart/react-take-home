import produce from "immer";
import { keyBy } from "lodash";
import {
  LOAD_CAMPAIGNS,
  LOAD_CAMPAIGNS_SUCCESS,
  LOAD_CAMPAIGNS_ERROR
} from "./constants";

export const initialState = {
  loading: false,
  error: false,
  feedData: {
    campaigns: false
  }
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CAMPAIGNS:
        draft.loading = true;
        draft.error = false;
        draft.feedData.campaigns = false;
        break;
      case LOAD_CAMPAIGNS_SUCCESS:
        draft.loading = false;
        draft.feedData.campaigns = keyBy(
          action.campaigns,
          campaign => campaign.id
        );
        break;
      case LOAD_CAMPAIGNS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
