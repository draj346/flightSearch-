import React, { forwardRef } from 'react';
import styles from '../../styles/styles';

const buttonStyle = {
  ...styles.margin5,
  alignSelf: 'flex-start'
};

const Button = props => {
  const { name, style=buttonStyle, ...rest } = props;

  return(
    <button 
      style={style}
      {...rest}
    >
      {name}
    </button>
  );
}

export default Button;