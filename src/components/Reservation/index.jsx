import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

export const Reservation = () => {
  const [reservation, setReservation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        setReservation(json.data);
      });
  }, []);

  return (
    <>
      {reservation && (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.date}</p>
              <p>Bratislava, 21:15</p>
              <p>Budapest, 23:55</p>
              <p>18</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
