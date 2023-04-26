import React, { useReducer, useState, useEffect } from 'react';
import AppContext from '.';
import { AppReducer } from './reducer';
import { getAllCategoriesAndFilters } from '@/services/categories/getCateriesAndFilters';
import { useSession } from 'next-auth/react';

interface AppContextProviderProps extends React.PropsWithChildren {}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, dispatch] = useReducer(AppReducer, {});
  const { data } = useSession()
  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = data! || {};


  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getAllCategoriesAndFilters();
      dispatch({ type: 'GET_ALL_CATEGORIES_AND_FILTERS', payload: data?.data || [] });
    })();
  }, []);

  useEffect(() => {
  }, [])

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        toggleSidebar: toggleSideBar,
        categories: state.categories || [],
        user,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
