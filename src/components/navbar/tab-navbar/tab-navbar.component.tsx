
import React from 'react';
import {
  Toolbar, Divider, Tabs, Tab,
} from '@material-ui/core';

import useStyles from './tab-navbar.styles';
import { TextButton } from '../../common/text-button/text-button.component';


interface Props {
  trendingData?: string[];
}

export const SecondNavbar = (props: Props) => {
  const { trendingData } = props;
  console.log(trendingData);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Toolbar>
      <TextButton className={classes.sectionDesktop}>
        <b>Trending:</b>
      </TextButton>
      {['#Coming Soon', '#FreeWatch', '#WatchNow'].map((s) => (
        <TextButton className={classes.sectionDesktop}>
          {s}
        </TextButton>
      ))}
      <Divider
        className={classes.sectionDesktop}
        orientation="vertical"
        variant="middle"
        flexItem
        style={{ marginRight: '16px', marginLeft: '64px' }}
      />
      <Tabs
        className={classes.tabs}
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab className={classes.tab} label="Home" />
        <Tab className={classes.tab} label="Blog" disabled />
      </Tabs>
    </Toolbar>
  );
};
