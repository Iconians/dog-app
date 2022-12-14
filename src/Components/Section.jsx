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
