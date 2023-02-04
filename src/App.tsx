import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { Pet } from "./data/pet";
import Card from "./components/card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [pets, setPets] = useState<Pet[]>([...catData, ...dogData]);

  const catCount = catData.length;
  const dogCount = dogData.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {pets.map((pet, index) => (
            <Card key={`${pet.type}-${index}`} petObject={pet} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
