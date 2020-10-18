import React, { useState, useCallback, useEffect } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import styles from '../styles/styles';
import PropTypes from 'prop-types';

const RefineSeachForm = ({setPrice}) => {

  const [value, setValue] = useState(0);

  const handleOnChange = useCallback((data) => {
    setValue(data);
  });

  useEffect(() => {
    setPrice(value);
  }, [value]);

  return (
    <div style={refineStyle.mainDivStyle}>
      <span style={styles.containerHeader}>Refine Flight Search</span>
      <Slider
        value={value}
        min={0}
        max={20000}
        step={1000}
        onChange={handleOnChange}
    ></Slider>
    </div>
    
  )
}

const refineStyle = {
  mainDivStyle: {
    ...styles.borderGrey,
    marginLeft: 5,
    marginRight: 5,
  }
}

RefineSeachForm.propTypes = {
  setPrice: PropTypes.func,
}

export default React.memo(RefineSeachForm);