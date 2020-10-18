import React, { useCallback } from 'react';
import styles from '../../styles/styles';
import Button from './Button';
import PropTypes from 'prop-types';

const Flight = (props) => {

  const {fare, flight_id, source_code, destination_code, departs_at, arrives_at} = props;

  const onBookButtonClick =useCallback(() => {
    alert('Booking facility is not available')
  });

  return (
    <div style={cardStyle.mainDivStyle}>
      <div>
        <h2 style={cardStyle.priceContainer}>Rs. {fare}</h2>
        <div style={cardStyle.numberContainer}>{flight_id}</div>
        <div style={cardStyle.commonContainer}>{source_code} > {destination_code}</div>
        <div style={cardStyle.commonContainer}>Depart: {departs_at}</div>
        <div style={cardStyle.commonContainer}>Arrive: {arrives_at}</div>
      </div>
      <div style={cardStyle.imgContainer}>
        <img style={cardStyle.image} src={require('../../assets/img/flight.png')} alt='flight'></img>
        <Button onClick={onBookButtonClick} style={cardStyle.buttonContainer} name={'Book this flight'}></Button>
      </div>
    </div>
  )
}

const cardStyle = {
  mainDivStyle: {
    ...styles.borderGrey,
    margin: '5px 10px 10px 5px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: 130,
    height: 80,
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  priceContainer: {
    fontSize: 20,
    fontWeight: 600,
    margin: 5,
  },
  numberContainer: {
    fontSize: 12,
    margin: 5,
  },
  buttonContainer: {
    margin: '5px 2px 5px 2px',
    height: 25,
  },
  commonContainer: {
    ...styles.containerHeader,
    paddingTop: 2,
    paddingBottom: 2,
  }
}

Flight.propTypes = {
  fare: PropTypes.number,
  flight_id: PropTypes.string,
  source_code: PropTypes.string,
  destination_code: PropTypes.string,
  departs_at: PropTypes.string,
  arrives_at: PropTypes.string,
}

export default React.memo(Flight);