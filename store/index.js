import { createStore, combineRedicers } from "redux";
import alarmReducer from "../reducers/alarmReducer.js";

const rootReducer=combineRedicers({
    alarms: alarmReducer,
});

const configureStore= (()=>{
    return createStore(rootReducer);
});

export default configureStore;