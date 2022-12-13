import { filter } from "lodash";
import { DogCard } from "./DogCard";

// Right now this is a static array, but you will need to fetch these dogs from the local database

// Right now these dogs are constant, but in reality we should be getting these from our server
export const Dogs = ({
  dogs,
  favoriteDogs,
  unfavoriteDogs,
  favorites,
  unFavorites,
  setDogs,
}) => {
  const deleteDog = (id) => {
    const filterdogs = dogs.filter((dog) => dog.id !== id);
    setDogs(filterdogs);
  };

  const changeFav = (id) => {
    const updateDog = dogs.map((dog) => {
      if (dog.id === id && dog.isFavorite === true) {
        return { ...dog, isFavorite: false };
      }
      if (dog.id === id && dog.isFavorite === false) {
        return { ...dog, isFavorite: true };
      }
      return dog;
    });
    setDogs(updateDog);
  };

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {favoriteDogs
        ? favorites.map((dog) => (
            <DogCard
              changeFav={changeFav}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
              dogs={dogs}
            />
          ))
        : null}
      {unfavoriteDogs
        ? unFavorites.map((dog) => (
            <DogCard
              changeFav={changeFav}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
              dogs={dogs}
            />
          ))
        : null}
      {!favoriteDogs && !unfavoriteDogs
        ? dogs.map((dog) => (
            <DogCard
              changeFav={changeFav}
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
