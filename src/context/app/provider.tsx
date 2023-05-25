import React, { useReducer, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import AppContext from '.';
import { AppReducer, initialState } from './reducer';
import { Categorie, getAllCategoriesAndFilters } from '@/services/categories/getCateriesAndFilters';
import { Color, getAllColors } from '@/services/categories/colors';

interface AppContextProviderProps extends React.PropsWithChildren {}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { data } = useSession()

  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = data! || {};
  
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    (async () => {
      
      const promisesTofetch = [getAllCategoriesAndFilters(), getAllColors()];

      const [ categoriesResult, colorsResult ] = await Promise.allSettled(promisesTofetch);

      if(categoriesResult.status === 'fulfilled') {
        const categories = categoriesResult.value.data.data as  Categorie[];
        dispatch({ type: 'GET_ALL_CATEGORIES_AND_FILTERS', payload: categories || [] });
      }

      if(colorsResult.status === 'fulfilled') {
        const colors = colorsResult.value.data.data as Color[];
        dispatch({ type: 'GET_ALL_COLORS', payload: colors || [] });
      }


      const { data } = await getAllCategoriesAndFilters();
      dispatch({ type: 'GET_ALL_CATEGORIES_AND_FILTERS', payload: data?.data || [] });
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        toggleSidebar: toggleSideBar,
        categories: state.categories || [],
        user,
        dispatch,
        state
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
