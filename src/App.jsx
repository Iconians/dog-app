import "./App.css";
import { useState } from "react";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [createDogPage, setCreateDogPage] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section label={"Dogs: "} createDogPage={setCreateDogPage}>
        {!createDogPage ? <Dogs label={"All Dogs"} /> : <CreateDogForm />}
      </Section>
    </div>
  );
}

export default App;
