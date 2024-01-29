
// useMainContext.jsx
import { useContext } from 'react';
import { mainContext } from './mainProvider';

export const useMainContext = () => {
  return useContext(mainContext);
};
