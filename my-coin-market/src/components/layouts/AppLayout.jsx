import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from 'styles/withStyles';
import AppNav, { HEIGHT } from './AppNav';

const AppLayout = React.memo(({ children, styles }) => {
  return (
    <div {...css(styles.wrapper)}>
      <AppNav />
      <div {...css(styles.body)}>{children}</div>
    </div>
  );
});

AppLayout.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  body: {
    padding: unit * 4,
  },
}))(AppLayout);
