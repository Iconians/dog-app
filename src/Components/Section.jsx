import { useState } from "react";

export const Section = ({
  label,
  children,
  createDogPage,
  setCreateDogPage,
  setFavoriteDogsPage,
  setUnfavoriteDogsPage,
  favoriteDogsPage,
  unfavoriteDogsPage,
  favorite,
  unFavorite,
}) => {
  const favoriteDogCount = favorite;
  const unfavoriteDogCount = unFavorite;
  const active = "active";
  const dogsToShow = ({ target: { id } }) => {
    if (id === "favorite") {
      if (favoriteDogsPage === false) {
        setFavoriteDogsPage(true);
        setUnfavoriteDogsPage(false);
        setCreateDogPage(false);
      } else {
        setFavoriteDogsPage(false);
      }
    }
    if (id === "unfavorite") {
      if (unfavoriteDogsPage === false) {
        setFavoriteDogsPage(false);
        setUnfavoriteDogsPage(true);
        setCreateDogPage(false);
      } else {
        setUnfavoriteDogsPage(false);
      }
    }
    if (id === "createDog") {
      if (createDogPage === false) {
        setFavoriteDogsPage(false);
        setUnfavoriteDogsPage(false);
        setCreateDogPage(true);
      } else {
        setCreateDogPage(false);
      }
    }
  };

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div
            className={`selector ${favoriteDogsPage ? active : null}`}
            id="favorite"
            onClick={dogsToShow}
          >
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${unfavoriteDogsPage ? active : null}`}
            id="unfavorite"
            onClick={dogsToShow}
          >
            unfavorited ( {unfavoriteDogCount} )
          </div>
          <div
            className={`selector ${createDogPage ? active : null}`}
            id="createDog"
            onClick={dogsToShow}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
