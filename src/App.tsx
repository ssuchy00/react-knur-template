import { useState } from "react";
import Tabela from "./components/Tabela";
import { Pogoda } from "./components/pogoda";

function App() {

  const [licznik, setLicznik] = useState(0)
  const [papiesz, setPapiesz] = useState(null)

  const klik = () => {
    setLicznik((prev)=>prev+1);
  }

  const pisz = (e) => {
    setPapiesz(e.target.value);
  }

  const t = [
    {name: "papaj", wiek: 104, "obrazek": "https://i1.sndcdn.com/artworks-000296230950-zfa2yh-t500x500.jpg"},
    {name: "minio", wiek: 12, "obrazek": "https://www.partytino.pl/53240-pdt_771/ad-stroj-marynarz-papaj-80376bz-l-majtek-popeye-zeglarz.jpg"},
    {name: "knur", wiek: 49, "obrazek": "https://ipla.pluscdn.pl/dituel/cp/ci/cij3mcmxhu68tky3zg3q8udzuyx1xnz3.jpg"},
    {name: "suchy", wiek: 14, "obrazek": "https://i1.sndcdn.com/artworks-BXugSxIERNzWqoyd-ZCnyCA-t500x500.jpg"},
  ]
  return (
    <>
      <h1>KNUR + REACT</h1>
      <h2>Zadanie 1</h2>
      <button onClick={klik}>Kliknij</button>
      <p>{licznik}</p>
      <h2>Zadanie 2</h2>
      <input type="text" onChange={pisz}/>
      <br />
      {papiesz=="papiez" && <img src="https://i1.sndcdn.com/artworks-000296230950-zfa2yh-t500x500.jpg"/>}
      <h2>Zadanie 3 i 4</h2>
      <Tabela tabela={t}/>
      <h2>Zadanie 5</h2>
      <Pogoda />
    </>
  );
}

export { App };
