import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styles/withStyles';
import { unit } from 'styles/theme';

const Spacing = ({
  children,
  top,
  left,
  right,
  bottom,
  vertical,
  horizontal,
}) => {
  const computedTop = top || vertical;
  const computedBottom = bottom || vertical;
  const computedLeft = left || horizontal;
  const computedRight = right || horizontal;

  const computedStyles = {
    flex: 1,
    ...(computedTop && { marginTop: computedTop * unit }),
    ...(computedBottom && { marginBottom: computedBottom * unit }),
    ...(computedLeft && { marginLeft: computedLeft * unit }),
    ...(computedRight && { marginRight: computedRight * unit }),
  };

  return <div {...css(computedStyles)}>{children}</div>;
};

export const propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

Spacing.propTypes = propTypes;

export default Spacing;
