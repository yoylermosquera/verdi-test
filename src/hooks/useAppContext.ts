import { useContext } from 'react';
import AppContext from '../context/app/index';

const useAppContext = () => useContext(AppContext);

export default useAppContext;