import { Icons } from "../assets/icons";
// keep props
export const FavoriteButton = ({ onClick }) => (
  <img
    src={Icons.EmptyHeart}
    alt=""
    className="favorite-button"
    style={{ width: 40, border: 0 }}
    onClick={() => {
      onClick();
    }}
  />
);
