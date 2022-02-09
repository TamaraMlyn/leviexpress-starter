import React from 'react';
import { SeatRow } from '../SeatRow';
import './style.css';

const testRow = [
  {
    "number": 33,
    "isOccupied": false
  },
  {
    "number": 29,
    "isOccupied": true
  },
  {
    "number": 25,
    "isOccupied": false
  },
];

export const SeatPicker = ({seats, journeyId}) => {
  return (
    <div class="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div class="seats">
        {seats.map((row, index) => <SeatRow row={row} key={index}/>)}
      </div>
      <button class="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
