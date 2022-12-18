import { useAppContext } from "../Providers/app.provider";
import React from "react";

// make work without props
export const Section = ({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  const {
    favorites,
    unfavorite,
    showFavorited,
    showUnFavorited,
    showCreateDogForm,
    favoriteDogsPage,
    unfavoriteDogsPage,
    createDogPage,
  } = useAppContext();
  const favoriteDogCount = favorites.length;
  const unfavoriteDogCount = unfavorite.length;
  const active = "active";

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
            onClick={showFavorited}
          >
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${unfavoriteDogsPage ? active : null}`}
            id="unfavorite"
            onClick={showUnFavorited}
          >
            unfavorited ( {unfavoriteDogCount} )
          </div>
          <div
            className={`selector ${createDogPage ? active : null}`}
            id="createDog"
            onClick={showCreateDogForm}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
