import React from 'react';
import { Seat } from '../Seat';
import './style.css';

export const SeatPicker = () => {
  return (
    <div class="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div class="seats">
        <Seat number={1} />
        <Seat number={13} />
      </div>
      <button class="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
