
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');




var CHANGE_EVENT = 'change';
var responseData =[];
var dataForDays = [];
var history = [];
var citySwap = false;

function resetStore() {
  responseData = "";
  var citySwap = false;
  var responseData =[];
  var dataForDays = [];
}

function setResponseData(data){
  responseData = data
}

function setDataForDays(data) {
    dataForDays = data
}
function swapCity() {
    citySwap = !citySwap
}
function goToCity() {
  citySwap = true
}
function addToHistory(data) {
    if(history.length <= 8){
      history.unshift({city: data.city,date: data.date})
    }
    else{
      history.pop();
      history.unshift({city: data.city,date: data.date})
    }
}
/**
 * Extend VideoDisplayStore with EventEmmiter to add eventing capabilities
 */
 var WeatherStore = assign ( {}, EventEmitter.prototype, {
    
    getResponse: function(){
        return responseData;
    },
    getDataForDays: function () {
      return dataForDays
    },
    getHistory(){
      return history
    },
    getCitySwap(){
      return citySwap
    },
    getSmallHistory(){
      let smallHistory = history.slice(0, 3);;
      return smallHistory
    },
    /**
     * Emit Change event
     */
     emitChange: function() {
        this.emit(CHANGE_EVENT);
        },
        /**
       * Add change listener
       */ 
      addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
      },
      /**
       * Remove change listener
       */
      removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
      }
    });
/**
 * Register callback with AppDispatcher
 */
AppDispatcher.register(function(payload)  {
    var action = payload.action;
    switch(action.actionType)  {
      case AppConstants.SET_RESPONSE_DATA:
        setResponseData(action.data)
        break;
      case AppConstants.SET_DATA_FOR_DAYS:
        setDataForDays(action.data)
        break;
      case AppConstants.ADD_TO_HISTORY:
        addToHistory(action.data)
        break;
      case AppConstants.SWAP_CITY:
        swapCity(action.data)
        break;
      case AppConstants.GO_TO_CITY:
        goToCity(action.data)
        break;
      case AppConstants.RESET_STORE:
        resetStore(action.data)
        break;
      default:
          return true;
    
      }
        WeatherStore.emitChange();
        return true;
    });
export default WeatherStore;