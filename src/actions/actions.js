
 import {SET_ACTIVE_TAB }from './actiontypes'
 
 const setActiveTab = (tabName) => ({
    type: SET_ACTIVE_TAB,
    payload: tabName
});


export default setActiveTab