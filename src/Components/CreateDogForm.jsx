import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

export const CreateDogForm = ({ addDog }) => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        const dognameinput = e.target.dogname;
        const dogdescinput = e.target.dogdesc;
        const dogpicselect = e.target.dogpic;
        console.log(dognameinput.value);
        console.log(dogdescinput.value);
        console.log(dogpicselect.value);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" name="dogname" />
      <label htmlFor="description">Dog Description</label>
      <textarea name="dogdesc" id="" cols="80" rows="10"></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        name="dogpic"
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
