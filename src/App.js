import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import LoremIpsumGenerator from "./LoremIpsumGenerator";

import Options from "./components/Options";
import Output from "./components/Output";
import "./App.css";

const App = () => {
  const [paragraphes, setParagraphes] = useState([]);
  const [balise, setBalise] = useState("p");
  const [valEn, setvalEn] = useState(1);
  const [HtmlYoN, setHtmlYoN] = useState("No");

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${valEn}&start-with-lorem=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setParagraphes(data));
  }, [valEn]);

  return (
    <div className="App">
      <div className="container">
        <div className="titre">
          <h1>Generateur de texte de remplissage (paragraphes)</h1>
        </div>
        <Options
          paragraphes={paragraphes}
          HtmlYoN={HtmlYoN}
          setHtmlYoN={setHtmlYoN}
          valEn={valEn}
          setvalEn={setvalEn}
          balise={balise}
          setBalise={setBalise}
        />
        <Output paragraphes={paragraphes} HtmlYoN={HtmlYoN} balise={balise} />
        <LoremIpsumGenerator />
      </div>
    </div>
  );
};

export default App;
