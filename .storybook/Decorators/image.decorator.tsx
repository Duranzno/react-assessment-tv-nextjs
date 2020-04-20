import React from 'react';

import { theme } from '../../src/constants/theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
export const ImageDecorator = (imageSrc)=>(storyFn) => (
  <>
    <img src={imageSrc} alt="image"/>
    {storyFn()}
  </>
);
