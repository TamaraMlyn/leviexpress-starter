import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeatRow } from '../SeatRow';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

 const navigate = useNavigate();

  const handleBuy = () => {
    fetch(
      `https:/leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => navigate(`/reservation/${json.data.reservationId}`));
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow
            row={row}
            onSeatSelected={handleSeatSelect}
            selectedSeatNumber={selectedSeatNumber}
            key={index}
          />
        ))}
      </div>
      <button
        className="btn"
        type="button"
        disabled={selectedSeatNumber === null}
        onClick={handleBuy}
      >
        Rezervovat
      </button>
    </div>
  );
};
