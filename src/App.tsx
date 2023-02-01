import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { Cat, Dog } from "./data/pet";
import Card from "./components/card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Cat[]>(catData);
  const catCount = cats.length;

  const [dogs, setDogs] = useState<Dog[]>(dogData);
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {dogs.map((dog, index) => (
            <Card key={index} petObject={dog} />
          ))}
          {cats.map((cat, index) => (
            <Card key={index} petObject={cat} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
