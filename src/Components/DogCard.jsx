import { deleteDogsFetch } from "../Fetches/deleteDogsFetch";
import { favoriteDogFetch } from "../Fetches/favoriteDogFetch";
import { unfavoriteDogFetch } from "../Fetches/unfavoriteDogFetch";
import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";
export const DogCard = ({
  dog: { name, image, description, id, isFavorite },
  favoriteDog,
  unFavoriteDog,
  deleteDog,
}) => {
  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {isFavorite ? (
        <UnfavoriteButton
          onClick={() => {
            unfavoriteDogFetch(id).then(unFavoriteDog(id));
          }}
        />
      ) : (
        <FavoriteButton
          onClick={() => {
            favoriteDogFetch(id).then(favoriteDog(id));
          }}
        />
      )}
      {/* Use this button to delete a puppy :( */}
      <TrashButton
        disabled={isFavorite ? true : false}
        onClick={() => {
          deleteDogsFetch(id).then(deleteDog(id));
        }}
      />

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favoritest a dog */}
      {/* Try making className "favorite-overlay active"*/}
      <div className="favorite-overlay ">{"<3"}</div>

      {/* Ignore this  */}
      {/* You can temporarily set a unfavorite overlay after a user favoritest a dog */}
      {/* Try making className "unfavorite-overlay active"*/}
      <div className="unfavorite-overlay">{"</3"}</div>

      {/* A Dogs Name */}
      <p className="dog-name">{name}</p>

      {/* A Dogs Image */}
      <img src={image} alt={name} />

      {/*  A Dogs description*/}
      <p className="dog-description">{description}</p>
    </div>
  );
};
