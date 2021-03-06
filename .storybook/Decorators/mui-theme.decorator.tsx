import React from "react";

import {theme} from '../../src/constants/theme'
import { ThemeProvider, CssBaseline } from "@material-ui/core";
export const StylesDecorator = storyFn => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      { storyFn() }
    </ThemeProvider >
        
  );
