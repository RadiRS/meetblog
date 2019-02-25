import React from 'react';
import { Button as ButtonBase, Text } from 'native-base';

const Button = props => {
  const {
    buttonColor = '#079D75',
    labelColor = '#fff',
    label,
    ...restprops
  } = props;

  return (
    <ButtonBase style={{ backgroundColor: buttonColor }} {...restprops}>
      <Text uppercase={false} style={{ fontSize: 20, color: labelColor }}>
        {label}
      </Text>
    </ButtonBase>
  );
};

export default Button;
