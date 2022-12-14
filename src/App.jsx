import "./App.css";
import { useState } from "react";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";
import { useEffect } from "react";

function App() {
  const [favoriteDogsPage, setFavoriteDogsPage] = useState(false);
  const [unfavoriteDogsPage, setUnfavoriteDogsPage] = useState(false);
  const [createDogPage, setCreateDogPage] = useState(false);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((res) => res.json())
      .then((res) => setDogs(res));
  }, []);

  // FIND MISSING FUNCTION HERE
  // should be several function
  const findNewId = () => {
    let arr = [];
    let index = 0;
    let newId = 0;
    dogs.map((obj) => arr.push(obj.id));
    arr.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== index) {
        if (newId === 0) {
          newId = index;
        }
        index++;
      }
      if (arr[i] === index) {
        index++;
      }
    }
    if (newId === 0) {
      newId = arr.length;
    }
    return newId;
  };

  const addDog = (newDog) => {
    let currentIds = findNewId();
    let newId = currentIds;
    let addId = { ...newDog, id: newId };
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addId),
    })
      .then((res) => res.json())
      .then((data) => setDogs([...dogs, data]));
    // need to find 1st open/index slot for new dog
  };

  const favorites = dogs.filter((dog) => dog.isFavorite);
  const unfavorite = dogs.filter((dog) => dog.isFavorite);
  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        label={"Dogs: "}
        setCreateDogPage={setCreateDogPage}
        createDogPage={createDogPage}
        favoriteDogsPage={favoriteDogsPage}
        setFavoriteDogsPage={setFavoriteDogsPage}
        unfavoriteDogsPage={unfavoriteDogsPage}
        setUnfavoriteDogsPage={setUnfavoriteDogsPage}
        favorite={favorites.length}
        unFavorite={unfavorite.length}
      >
        {!createDogPage ? (
          <Dogs
            label={"All Dogs"}
            dogs={dogs}
            favorites={favorites}
            unFavorites={unfavorite}
            favoriteDogs={favoriteDogsPage}
            unfavoriteDogs={unfavoriteDogsPage}
            setDogs={setDogs}
          />
        ) : (
          <CreateDogForm addDog={addDog} />
        )}
      </Section>
    </div>
  );
}

export default App;
