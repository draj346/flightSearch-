import React, { forwardRef } from 'react';
import styles from '../../styles/styles';

const Dropdown = ({options, style=styles.margin5}, ref) => {
  
  const ListItems =() =>
    options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    )
  );

  return (
    <select style={style} ref={ref}>
      <ListItems></ListItems>
    </select>
  )
};

export default forwardRef(Dropdown);