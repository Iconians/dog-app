import { useAppContext } from "../Providers/app.provider";
import { DogCard } from "./DogCard";
import React from "react";

export const Dogs = () => {
  const {
    dogs,
    favorites,
    unfavorite,
    favoriteDogsPage,
    unfavoriteDogsPage,
    setDogs,
  } = useAppContext();
  const deleteDog = (id) => {
    const filterdogs = dogs.filter((dog) => dog.id !== id);
    setDogs(filterdogs);
  };

  const favoriteDog = (id) => {
    const updateDog = dogs.map((dog) => {
      if (dog.id === id && dog.isFavorite === false) {
        return { ...dog, isFavorite: true };
      }
      return dog;
    });
    setDogs(updateDog);
  };

  const unFavoriteDog = (id) => {
    const updateDog = dogs.map((dog) => {
      if (dog.id === id && dog.isFavorite === true) {
        return { ...dog, isFavorite: false };
      }
      return dog;
    });
    setDogs(updateDog);
  };

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {favoriteDogsPage
        ? favorites.map((dog) => (
            <DogCard
              favoriteDog={favoriteDog}
              unFavoriteDog={unFavoriteDog}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
              dogs={dogs}
            />
          ))
        : null}
      {unfavoriteDogsPage
        ? unfavorite.map((dog) => (
            <DogCard
              favoriteDog={favoriteDog}
              unFavoriteDog={unFavoriteDog}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
              dogs={dogs}
            />
          ))
        : null}
      {!favoriteDogsPage && !unfavoriteDogsPage
        ? dogs.map((dog) => (
            <DogCard
              favoriteDog={favoriteDog}
              unFavoriteDog={unFavoriteDog}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
              dogs={dogs}
            />
          ))
        : null}
    </>
  );
};
