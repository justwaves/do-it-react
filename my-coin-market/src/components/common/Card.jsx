import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from 'styles/withStyles';
import Spacing, {
  propTypes as spacingPropTypes,
} from 'components/common/Spacing';

const Card = React.memo(({ children, styles, ...spacingProps }) => {
  return (
    <div {...css(styles.wrapper)}>
      <Spacing {...spacingProps}>{children}</Spacing>
    </div>
  );
});

Card.propTypes = {
  ...spacingPropTypes,
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ depth, unit, color }) => ({
  wrapper: {
    ...depth.level1,
    borderRadius: unit,
    backgroundColor: color.white,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: unit * 4,
  },
}))(Card);
