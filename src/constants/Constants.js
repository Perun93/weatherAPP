/**
 * Action constants
 */

/************************************
  * load libraries
*************************************/
var keyMirror = require('keymirror');

module.exports = keyMirror({	
  SET_RESPONSE_DATA: "setResponseData", 
  SET_DATA_FOR_DAYS: "setDataForDays",
  ADD_TO_HISTORY: "addToHistory",
  SWAP_CITY: "swapCity",
  GO_TO_CITY: "goToCity",
  GO_TO_HOME: "goToHome",
  RESET_STORE: "resetStore",
  SET_API_ERROR: "setApiError"
});
