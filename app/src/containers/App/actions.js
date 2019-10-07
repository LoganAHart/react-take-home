import {
  LOAD_CAMPAIGNS,
  LOAD_CAMPAIGNS_SUCCESS,
  LOAD_CAMPAIGNS_ERROR
} from "./constants";

/**
 * Load the campaigns, starts the request saga
 *
 * @return {object} action object with type `LOAD_CAMPAIGNS`
 */
export function loadCampaigns() {
  return {
    type: LOAD_CAMPAIGNS
  };
}

/**
 *
 * @param {array} campaigns the campaign data
 *
 * @return {object} action object with type `LOAD_CAMPAIGNS_SUCCESS` and `campaigns` payload
 */
export function campaignsLoaded(campaigns) {
  return {
    type: LOAD_CAMPAIGNS_SUCCESS,
    campaigns
  };
}

/**
 *
 * @param {object} error the error object
 *
 * @return action object with type `LOAD_CAMPAIGNS_ERROR` and `error` payload
 */
export function campaignLoadingError(error) {
  return {
    type: LOAD_CAMPAIGNS_ERROR,
    error
  };
}
