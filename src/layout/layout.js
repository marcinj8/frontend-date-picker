import React, { useState } from 'react';

import { Navigation } from '../navigation';
import { EventCreator } from '../datePickerPage';
import { CreatedEventsViewer } from '../createdEventsViewer';

const Layout = () => {
  const [activeView, setActiveView] = useState('newEvent');

  return (
    <React.Fragment>
      <Navigation activeView={activeView} setView={setActiveView} />
      {activeView === 'newEvent' && <EventCreator />}
      {activeView === 'checkEvents' && <CreatedEventsViewer />}
    </React.Fragment>
  );
};

export default Layout;
