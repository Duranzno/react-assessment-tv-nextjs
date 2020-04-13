// #region Global Imports
import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// #endregion Global Imports

// #region Local Imports
// import {withRedux} from "./Decorators"
// #endregion Local Imports

addDecorator(withKnobs);
// addDecorator(withRedux());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});