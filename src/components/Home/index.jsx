import React from 'react';
import { useState } from 'react/cjs/react.development';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null)

  return (
  <main>
    <JourneyPicker onJourneyChange={(data) => setJourney(data)}/>
    {journey !== null ? (<p>Nalezeno spojení s id {journey.journeyId}</p>) : ""}
  </main>
)};
