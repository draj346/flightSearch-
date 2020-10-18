import React, { useState } from 'react';
import './App.css';
import SearchContainer from './components/SearchForm';
import RefineSeachForm from './components/RefineFlightSearchForm';
import styles from './styles/styles';
import FlightList from './components/FlightList';


const App = () => {

  const [searchCriteria, setSearchCriteria] = useState({
    origin: '',
    destination: '',
  });
  const [price, setPrice] = useState(0);

  return (
    <div style={appStyle.mainDivStyle}>
      <header><h2>Flight Search Engine</h2></header>
      <div style={appStyle.bottomDivStyle}>
        <div style={appStyle.leftDivStyle}>
          <SearchContainer setSearchCriteria={setSearchCriteria}></SearchContainer>
          <RefineSeachForm setPrice={setPrice}></RefineSeachForm>
        </div>
        {
          searchCriteria.origin && searchCriteria.destination ?
            <div style={appStyle.rightDivStyle}>
            <header style={appStyle.headerStyle}>
              <h3 style={appStyle.headerH3Style}>{searchCriteria.origin ? searchCriteria.origin + '>' : ''} {searchCriteria.destination}</h3>
            </header>
            <div style={appStyle.searchDisplayContainer}>
              <FlightList {...searchCriteria} price={price}></FlightList>
            </div>
          </div> :
          <div style={appStyle.rightDivStyle}>
            <h1 style={styles.noDataStyle}>No Flight Searched</h1>
          </div>
        }
      </div>
    </div>
  );
}

const appStyle = {
  mainDivStyle: {
    ...styles.borderGrey,
    margin: 5,
    width: 800,
  },
  bottomDivStyle: {
    borderTop: `1px grey solid`,
    display: 'flex',
    minHeight: 500,
  },
  leftDivStyle: {
    borderRight: `1px grey solid`,
  },
  rightDivStyle: {
    flexGrow: 1,
  },
  headerStyle: {
    borderBottom: `1px grey solid`,
  },
  headerH3Style: {
    paddingLeft: 15,
  },
  filterSection: {
    overflow: scroll,
    height: 500,
  },
  searchDisplayContainer: {
    height: 500,
    overflow: 'scroll',
  }
};

export default App;
