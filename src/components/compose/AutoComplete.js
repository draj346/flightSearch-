import React, { forwardRef, useState } from 'react';
import styles from '../../styles/styles';
import Autocomplete from 'react-autocomplete';

const AutoCompleteTextbox = ({placehoder}, ref) => {
  const [value, setValue] = useState('');
  const items = [
    { label: 'Delhi'},
    { label: 'Kolkata'},
    { label: 'Pune'},
    { label: 'Mumbai'},
    { label: 'Ahmedabad'},
    { label: 'Chandigarh'},
    { label: 'Chennai'},
    { label: 'Bangalore'},
    { label: 'Hyderabad'},
  ];
  
  return (
    <Autocomplete
        getItemValue={(item) => item.label}
        items={items}
        renderItem={(item, isHighlighted) =>
          <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        ref={ref}
        wrapperStyle={styles.margin5}
        menuStyle={autocompleteStyle.menuStyle}
        inputProps={{ placeholder: placehoder }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSelect={(val) => setValue(val)}
      ></Autocomplete>
  )
  
};

const autocompleteStyle = {
  menuStyle: {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: 100,
  }
}

export default forwardRef(AutoCompleteTextbox);