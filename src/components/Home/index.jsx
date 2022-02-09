import React from 'react';
import { useState } from 'react/cjs/react.development';
import { JourneyDetail } from '../JourneyDetail';
import { JourneyPicker } from '../JourneyPicker';
import { SeatPicker } from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null)
console.log(journey)

  return (
  <main>
    <JourneyPicker onJourneyChange={(data) => setJourney(data)}/>
    {journey && <JourneyDetail journey={journey}/>}
    {journey && <SeatPicker seats={journey.seats} journeyId={journey.journeyId}/>}
  </main>
)};
