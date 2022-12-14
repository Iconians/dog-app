import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";
export const DogCard = ({
  dog: { name, image, description, id, isFavorite },
  changeFav,
  deleteDog,
}) => {
  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {isFavorite ? (
        <UnfavoriteButton
          onClick={() => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
              isFavorite: false,
            });
            const requestOptions = {
              method: "PATCH",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };
            fetch(`http://localhost:3000/dogs/${id}`, requestOptions).then(
              (response) => response.text()
            );
            changeFav(id);
          }}
        />
      ) : (
        <FavoriteButton
          onClick={() => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
              isFavorite: true,
            });
            const requestOptions = {
              method: "PATCH",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };
            fetch(`http://localhost:3000/dogs/${id}`, requestOptions).then(
              (response) => response.text()
            );
            changeFav(id);
          }}
        />
      )}
      {/* Use this button to delete a puppy :( */}
      <TrashButton
        disabled={isFavorite ? true : false}
        onClick={() => {
          const requestOptions = {
            method: "DELETE",
            redirect: "follow",
          };

          fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
            .then((response) => response.text())
            .then(deleteDog(id));
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
