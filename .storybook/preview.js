// #region Global Imports
const { addDecorator, addParameters } =require("@storybook/react");
const { withKnobs } =require("@storybook/addon-knobs");
const { INITIAL_VIEWPORTS } =require("@storybook/addon-viewport");
// #endregion Global Imports

// #region Local Imports
// import {withRedux} from "./Decorators"
import {StylesDecorator} from './Decorators'
// #endregion Local Imports

addDecorator(withKnobs);
addDecorator(StylesDecorator);
// addDecorator(withRedux());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});