import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

export const CreateDogForm = ({ addDog }) => {
  const [dogName, setDogName] = useState("");
  const [dogdesc, setDogDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);

  const captureInput = ({ target: { name, value } }) => {
    if (name === "dogName") {
      setDogName(value);
    }
    if (name === "dogDesc") {
      setDogDesc(value);
    }
  };

  const newDog = () => {
    let addedDog = {
      name: dogName,
      image: selectedImage,
      description: dogdesc,
      isFavorite: true,
    };
    addDog(addedDog);
  };

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        newDog();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" name="dogName" onChange={captureInput} />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name="dogDesc"
        id=""
        onChange={captureInput}
        cols="80"
        rows="10"
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        name="dogPic"
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return <option value={pictureValue}>{label}</option>;
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
