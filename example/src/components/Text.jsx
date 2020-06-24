import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../styles/withStyles';

const Text = ({
  children,
  styles,
  large,
  xlarge,
  small,
  xsmall,
  primary,
  secondary,
}) => {
  return (
    <span
      {...css(
        styles.default,
        xsmall && styles.xsmall,
        small && styles.small,
        large && styles.large,
        secondary && styles.secondary,
        primary && styles.primary,
      )}
    >
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
