import "./App.css";
import React from "react";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";
import { useAppContext } from "./Providers/app.provider";

function App() {
  const { createDogPage } = useAppContext();
  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section label={"Dogs: "}>
        {!createDogPage ? <Dogs label={"All Dogs"} /> : <CreateDogForm />}
      </Section>
    </div>
  );
}

export default App;
