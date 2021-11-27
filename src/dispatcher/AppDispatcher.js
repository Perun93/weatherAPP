/**
 * Create own instance of Facebook' Dispatcher library.
 * Add a handleAction helper method  so that we can identify where this action came from
 */

/************************************
  * load libraries
*************************************/
import {Dispatcher} from 'flux';

/**
 * Create dispatcher instance
 */
var AppDispatcher = new Dispatcher();

/**
 * Convenience method to handle dispatch requests
 * Receive an action from an action creator and 
 * then the Dispatcher dispatch the action with a source property and the action that was supplied as an argument
 */
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

export default AppDispatcher;
