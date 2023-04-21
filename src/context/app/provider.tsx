import React, { useState } from 'react';
import AppContext from '.';

interface AppContextProviderProps extends React.PropsWithChildren {}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        toggleSidebar: toggleSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
