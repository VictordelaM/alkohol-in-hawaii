import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

export const mainContext = createContext();

export const useMainContext = () => {
  return useContext(mainContext);
};

const MainProvider = ({ children }) => {
  const [categoryCocktails, setCategoryCocktails] = useState([]);
  const [randomCocktails, setRandomCocktails] = useState([]);
  const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([]);
  const [idCocktails, setIdCocktails] = useState();
  const [idIngridients, setIdIngridients] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin');
        setCategoryCocktails(response.data.drinks);
      } catch (error) {
        console.error('Error fetching categoryCocktails:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        setRandomCocktails(response.data.drinks);
      } catch (error) {
        console.error('Error fetching randomCocktails:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        setNonalcoholicCocktails(response.data.drinks);
      } catch (error) {
        console.error('Error fetching nonalcoholicCocktails:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');
        setIdCocktails(response.data.drinks);
      } catch (error) {
        console.error('Error fetching idCocktails:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552');
        setIdIngridients(response.data.ingredients);
      } catch (error) {
        console.error('Error fetching idIngridients:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <mainContext.Provider
      value={{
        categoryCocktails,
        setCategoryCocktails,
        randomCocktails,
        setRandomCocktails,
        nonalcoholicCocktails,
        setNonalcoholicCocktails,
        idCocktails,
        setIdCocktails,
        idIngridients,
        setIdIngridients,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;


