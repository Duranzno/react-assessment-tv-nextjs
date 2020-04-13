// #region Global Imports
import { Provider } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { createStore } from 'redux';
// #endregion Local Imports

export const withRedux = () => (story: any) => (
    <Provider store={createStore(()=>{movies:[]})}> {story()}</Provider >
);
