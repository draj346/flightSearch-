import React, { forwardRef } from 'react';
import styles from '../../styles/styles';

const Textbox = ({placehoder, style=styles.margin5, type}, ref) => {
  
  return (
    <input type={type} style={style} placeholder={placehoder} ref={ref}>
    </input>
  )
  
};

export default forwardRef(Textbox);