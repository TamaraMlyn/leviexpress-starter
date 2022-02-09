import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({ row, onSeatSelected, selectedSeatNumber }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={seat.number === selectedSeatNumber}
          onSelect={onSeatSelected}
          key={seat.number}
        />
      ))}
    </div>
  );
};
