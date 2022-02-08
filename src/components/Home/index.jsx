import React from 'react';
import { useState } from 'react/cjs/react.development';
import { JourneyDetail } from '../JourneyDetail';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null)

  return (
  <main>
    <JourneyPicker onJourneyChange={(data) => setJourney(data)}/>
    {journey && <JourneyDetail journey={journey}/>}
  </main>
)};
