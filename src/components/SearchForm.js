import React, { useRef, useState, useCallback } from 'react';
import Textbox from './compose/Textbox';
import styles from '../styles/styles';
import Dropdown from './compose/Dropdown';
import Button from './compose/Button';
import AutoCompleteTextbox from './compose/AutoComplete';
import PropTypes from 'prop-types';

const SearchContainer = ({setSearchCriteria}) => {

  const originCityRef = useRef(null);
  const destCityRef = useRef(null);
  const departureCityRef = useRef(null);
  const passengerRef = useRef(null);
  const passenger = ['Passengers',1,2,3,4,5];
  
  const onSearchClick = useCallback(() => {
    const data = {
      origin: originCityRef.current.refs.input.value,
      destination: destCityRef.current.refs.input.value,
    }
    setSearchCriteria(data);
  });
  
  return (
    <div style={searchStyle.mainDivStyle}>
      <span style={searchStyle.titleStyle}>One Way</span>
      <div style={searchStyle.formDivStyle}>
        <AutoCompleteTextbox ref={originCityRef} placehoder={'Enter Origin City'}></AutoCompleteTextbox>
        <AutoCompleteTextbox ref={destCityRef} placehoder={'Enter Destination City'}></AutoCompleteTextbox>
        <Textbox ref={departureCityRef} type={'date'} placehoder={'Departure Date'}></Textbox>
        <Dropdown ref={passengerRef} options={passenger}></Dropdown>
        <Button name={'Search'} onClick={onSearchClick}></Button>
      </div>
    </div>
  )
}

const searchStyle = {
  mainDivStyle: {
    ...styles.flexDirectionCol,
    textAlign: 'start',
    margin: 5,
  },
  titleStyle: {
    ...styles.borderLeftGrey,
    ...styles.borderRightGrey,
    ...styles.borderTopGrey,
    ...styles.containerHeader,
    paddingRight: 5,
    alignSelf: 'flex-start',
  },
  formDivStyle: {
    ...styles.flexDirectionCol,
    ...styles.borderGrey,
    alignContent: 'flex-start',
  },
}

SearchContainer.propTypes = {
  setSearchCriteria: PropTypes.func,
}

export default React.memo(SearchContainer);