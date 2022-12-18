import React, { useContext } from "react";
import { createContext } from "react";
import { addDogsFetch } from "../Fetches/addDogsFetch";
import { onloadDogsFetch } from "../Fetches/onloadDogsFetch";
import { useEffect } from "react";
import { useState } from "react";

const AppContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [favoriteDogsPage, setFavoriteDogsPage] = useState(false);
  const [unfavoriteDogsPage, setUnfavoriteDogsPage] = useState(false);
  const [createDogPage, setCreateDogPage] = useState(false);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    onloadDogsFetch().then((res) => setDogs(res));
  }, []);

  const addDog = (newDog) => {
    addDogsFetch(newDog)
      .then((res) => res.json())
      .then((data) => setDogs([...dogs, data]));
  };

  const favorites = dogs.filter((dog) => dog.isFavorite === true);
  const unfavorite = dogs.filter((dog) => dog.isFavorite === false);

  const showFavorited = () => {
    if (favoriteDogsPage === false) {
      setFavoriteDogsPage(true);
      setUnfavoriteDogsPage(false);
      setCreateDogPage(false);
    }
    if (favoriteDogsPage === true) {
      setFavoriteDogsPage(false);
    }
  };

  const showUnFavorited = () => {
    if (unfavoriteDogsPage === false) {
      setFavoriteDogsPage(false);
      setUnfavoriteDogsPage(true);
      setCreateDogPage(false);
    }
    if (unfavoriteDogsPage === true) {
      setUnfavoriteDogsPage(false);
    }
  };

  const showCreateDogForm = () => {
    if (createDogPage === false) {
      setFavoriteDogsPage(false);
      setUnfavoriteDogsPage(false);
      setCreateDogPage(true);
    }
    if (createDogPage === true) {
      setCreateDogPage(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        favoriteDogsPage,
        unfavoriteDogsPage,
        createDogPage,
        addDog,
        setDogs,
        favorites,
        unfavorite,
        showCreateDogForm,
        showFavorited,
        showUnFavorited,
        dogs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    favoriteDogsPage: context.favoriteDogsPage,
    unfavoriteDogsPage: context.unfavoriteDogsPage,
    createDogPage: context.createDogPage,
    addDog: context.addDog,
    setDogs: context.setDogs,
    favorites: context.favorites,
    unfavorite: context.unfavorite,
    showCreateDogForm: context.showCreateDogForm,
    showFavorited: context.showFavorited,
    showUnFavorited: context.showUnFavorited,
    dogs: context.dogs,
  };
};
