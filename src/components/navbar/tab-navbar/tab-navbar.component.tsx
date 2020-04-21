
import React from 'react';
import {
  Toolbar, Divider, Tabs, Tab, Hidden,
} from '@material-ui/core';

import useStyles from './tab-navbar.styles';
import { TextButton } from '../../common/text-button/text-button.component';
import { strings } from '../../../constants/strings';

interface Props {
  trendingData?: string[];
}

export const SecondNavbar = (props: Props) => {
  const { trendingData } = props;
  console.log(trendingData);
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
  const TabContent = (
    <>
      <Tab label="Home" className={cls.tab} />
      <Tab label="Blog" disabled className={cls.tab} />
    </>
  );
  return (
    <Toolbar className={cls.toolbar} disableGutters>
      <Hidden smDown>
        <div className={cls.trending}>
          <TextButton>
            <b>{strings.trending}</b>
          </TextButton>
          {strings.networks.map((s) => (
            <TextButton>{s}</TextButton>
          ))}
        </div>
        <Divider className={cls.divider} orientation="vertical" variant="middle" flexItem />
      </Hidden>
      <Hidden mdUp>
        <Tabs {...TabsProps} variant="fullWidth" centered>
          {TabContent}
        </Tabs>
      </Hidden>

      <Hidden smDown>
        <Tabs {...TabsProps}>{TabContent}</Tabs>
      </Hidden>
    </Toolbar>
  );
};
