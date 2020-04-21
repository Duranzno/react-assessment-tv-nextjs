
import React from 'react';
import {
  Toolbar, Divider, Tabs, Tab, Hidden,
} from '@material-ui/core';

import useStyles from './tab-navbar.styles';
import { TextButton } from '../../common/text-button/text-button.component';
import { strings } from '../../../constants/strings';

export const TabNavbar = () => {
  const cls = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const TabsProps = {
    value,
    textColor: 'primary',
    onChange: handleChange,
    indicatorColor: 'primary',
    className: cls.tabs,
    TabIndicatorProps: { className: cls.indicator },
    'aria-label': 'disabled tabs example',
  };
  return (
    <Toolbar className={cls.toolbar} disableGutters>
      <Hidden smDown>
        <div className={cls.trending}>
          <span className={cls.trendingTitle}>
            <TextButton>
              {strings.trending}
            </TextButton>
          </span>
          {strings.networks.map((s) => (
            <TextButton key={s}>{s}</TextButton>
          ))}
        </div>
        <Divider className={cls.divider} orientation="vertical" variant="middle" flexItem />
      </Hidden>
      <Hidden mdUp>
        <Tabs {...TabsProps} variant="fullWidth">
          <Tab label="Home" className={cls.tab} />
        </Tabs>
      </Hidden>

      <Hidden smDown>
        <Tabs {...TabsProps}>
          <Tab label="Blog" className={cls.tab} />

        </Tabs>
      </Hidden>
    </Toolbar>
  );
};
