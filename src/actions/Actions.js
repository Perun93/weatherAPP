/**
 *  Flux actions
 */

/************************************
 * load own components
*************************************/
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';

var AppActions = { 
  setResponseData :function(data){
      AppDispatcher.handleAction({
        actionType: AppConstants.SET_RESPONSE_DATA,
        data : data
      });
    },
    setDataForDays :function(data){
        AppDispatcher.handleAction({
          actionType: AppConstants.SET_DATA_FOR_DAYS,
          data : data
        });
    },
    addToHistory :function(data){
      AppDispatcher.handleAction({
        actionType: AppConstants.ADD_TO_HISTORY,
        data : data
      });
    },
    swapCity :function(data){
      AppDispatcher.handleAction({
        actionType: AppConstants.SWAP_CITY,
        data : data
      });
    },
    goToCity :function(data){
      AppDispatcher.handleAction({
        actionType: AppConstants.GO_TO_CITY,
        data : data
      });
    },
    resetStore :function(data){
      AppDispatcher.handleAction({
        actionType: AppConstants.RESET_STORE,
        data : data
      });
    },
};

export default AppActions;
