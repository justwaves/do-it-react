import React from 'react';

const withHoC = (WrappedComponent) => {
  return class WithHoC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withHoC;
