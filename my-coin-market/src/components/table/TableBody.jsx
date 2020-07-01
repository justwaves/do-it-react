import React from 'react';
import PropTypes from 'prop-types';

const TableBody = React.memo(({ children }) => {
  const { length } = React.Children.toArray(children);

  return (
    <tbody>
      {React.Children.map(children, (child, index) => {
        const baseline = index < length - 1;
        return React.cloneElement(child, { baseline });
      })}
    </tbody>
  );
});

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
