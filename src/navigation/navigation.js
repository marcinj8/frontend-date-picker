import React from 'react';

import {
  StyledNavigation,
  StyledNavigationList,
  StyledNavigationItem,
} from './navigation.scss';

const Navigation = ({ activeView, setView }) => {
  return (
    <StyledNavigation>
      <StyledNavigationList>
        <StyledNavigationItem
          isActive={activeView === 'newEvent' }
          onClick={() => setView('newEvent')}
        >
          new event
        </StyledNavigationItem>
        <StyledNavigationItem
          isActive={activeView === 'checkEvents' }
          onClick={() => setView('checkEvents')}
        >
          check events
        </StyledNavigationItem>
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default Navigation;
