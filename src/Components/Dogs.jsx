import { DogCard } from "./DogCard";

// Right now this is a static array, but you will need to fetch these dogs from the local database

// Right now these dogs are constant, but in reality we should be getting these from our server
export const Dogs = ({
  dogs,
  favoriteDogs,
  unfavoriteDogs,
  favorites,
  unFavorites,
}) => {
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {favoriteDogs
        ? favorites.map((dog) => <DogCard dog={dog} key={dog.id} />)
        : null}
      {unfavoriteDogs
        ? unFavorites.map((dog) => <DogCard dog={dog} key={dog.id} />)
        : null}
      {!favoriteDogs && !unfavoriteDogs
        ? dogs.map((dog) => <DogCard dog={dog} key={dog.id} />)
        : null}
    </>
  );
};
