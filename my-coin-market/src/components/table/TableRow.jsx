import React from 'react';
import PropTypes from 'prop-types';

const TableRow = React.memo(({ children, isHeader, baseline }) => {
  return (
    <tr>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { baseline, isHeader }),
      )}
    </tr>
  );
});

TableRow.propTypes = {
  children: PropTypes.node,
  baseline: PropTypes.bool,
  isHeader: PropTypes.bool,
};

export default TableRow;
