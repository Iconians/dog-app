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
  const sortDogs = () => {
    let arr = [];
    dogs.map((dog) => arr.push(dog.id));
    arr.sort((a, b) => {
      return a - b;
    });
    return arr;
  };

  const assignId = () => {
    const arr = sortDogs();
    let id = 0;
    let index = 0;
    // find first open id slot
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== index && id === 0) {
        id = index;
      }
      index++;
      console.log(i, index);
    }
    // incase there are no open id's
    if (id === 0) {
      id = arr.length;
    }
    return id;
  };

  const addDog = (newDog) => {
    let getId = assignId();
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newDog, id: getId }),
    })
      .then((res) => res.json())
      .then((data) => setDogs([...dogs, data]));
    // need to find 1st open/index slot for new dog
  };

  const favorites = dogs.filter((dog) => dog.isFavorite === true);
  const unfavorite = dogs.filter((dog) => dog.isFavorite === false);
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
