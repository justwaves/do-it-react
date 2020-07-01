import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from 'styles/withStyles';

const Table = React.memo(({ styles, children }) => {
  return <table {...css(styles.table)}>{children}</table>;
});

Table.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired,
};

export default withStyles(() => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
}))(Table);
