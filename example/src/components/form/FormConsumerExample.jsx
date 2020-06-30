import React, { PureComponent } from 'react';

import Input from '../Input';
import { Consumer } from './FormContext';

class FormConsumerExample extends PureComponent {
  render() {
    const { name, ...otherProps } = this.props;
    console.log(name);
    return (
      <Consumer>
        {({ values, errors, onChange }) => {
          console.log(values, errors);
          return (
            <Input
              {...otherProps}
              name={name}
              onChange={onChange}
              value={values[name]}
              errorMessage={errors[name]}
            />
          );
        }}
      </Consumer>
    );
  }
}

export default FormConsumerExample;
