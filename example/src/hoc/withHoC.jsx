import React from 'react';

const withHoC = (WrappedComponent) => {
  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name;
  return class WithHoC extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withHoC;
