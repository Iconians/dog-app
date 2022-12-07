import { useState } from "react";

export const Section = ({ label, children, createDogPage }) => {
  const favoriteDogCount = 1;
  const unfavoriteDogCount = 2;

  const [favoriteDogsPage, setFavoriteDogsPage] = useState(false);
  const [unfavoriteDogsPage, setUnfavoriteDogsPage] = useState(false);
  const dogsToShow = ({ target: { id } }) => {
    console.log(id);
    if (id === "favorite") {
      setFavoriteDogsPage(true);
      setUnfavoriteDogsPage(false);
      createDogPage(false);
    }
    if (id === "unfavorite") {
      setFavoriteDogsPage(false);
      setUnfavoriteDogsPage(true);
      createDogPage(false);
    }
    if (id === "createDog") {
      setFavoriteDogsPage(false);
      setUnfavoriteDogsPage(false);
      createDogPage(true);
    }
  };
  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div className={`selector active`} id="favorite" onClick={dogsToShow}>
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div className={`selector`} id="unfavorite" onClick={dogsToShow}>
            unfavorited ( {unfavoriteDogCount} )
          </div>
          <div className={`selector`} id="createDog" onClick={dogsToShow}>
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
