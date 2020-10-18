import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FlightData from '../assets/json/flights.json';
import Flight from './compose/Flight';
import styles from '../styles/styles';

const FlightList = (props) => {
  const {origin, destination, price} = props;
  const [flights, setFlights] = useState([]);
  const [originalflights, setOriginalflights] = useState([]);

  useEffect(() => {
    const result = FlightData.default.filter(flight => 
      flight.source === origin &&
      flight.destination === destination
    );
    setFlights(result);
    setOriginalflights(result);
  }, [origin, destination])

  useEffect(() => {
    if (price > 0) {
      const result = originalflights.filter(flight =>
        flight.fare > price
      );
      setFlights(result);
    }
  }, [price])


  return (
    flights.length > 0 ?
    (
      flights.map((flight, i) => (
        <Flight key={i} {...flight}></Flight>
      ))
    ) :
    (
      <h1 style={styles.noDataStyle}>No Flight Available!</h1>
    )
  )
}

FlightList.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  departureData: PropTypes.string,
  price: PropTypes.number,
}

export default React.memo(FlightList);