import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = (props) => {
  const {
    paragraphes,
    HtmlYoN,
    setHtmlYoN,
    valEn,
    setvalEn,
    balise,
    setBalise,
  } = props;

  return (
    <div className="options">
      <div className="wrapper">
        <div className="optionsContainer">
          <div className="paragraphes">
            <p>Paragraphes :</p>
            <input
              type="number"
              min="1"
              max="10"
              value={valEn}
              defaultValue="1"
              onChange={(e) => setvalEn(e.target.value)}
            />
          </div>
          <div className="HtmlYoN">
            <p>Inclure l'HTML ?</p>
            <select
              defaultValue={HtmlYoN}
              onChange={(e) => setHtmlYoN(e.target.value)}>
              <option value="no">Non</option>
              <option value="Yes">Oui</option>
            </select>
          </div>
          <div className="balise">
            <p>Balise :</p>
            <select
              defaultValue={balise}
              onChange={(e) => setBalise(e.target.value)}>
              <option value="p">&lt;p&gt;</option>
              <option value="h1">&lt;h1&gt;</option>
              <option value="h2">&lt;h2&gt;</option>
              <option value="h3">&lt;h3&gt;</option>
              <option value="h4">&lt;h4&gt;</option>
              <option value="h5">&lt;h5&gt;</option>
              <option value="h6">&lt;h6&gt;</option>
              <option value="span">&lt;span&gt;</option>
              <option value="div">&lt;div&gt;</option>
            </select>
          </div>
        </div>
        <div className="cc">
          <CopyToClipboard
            text={paragraphes.map((sentence) =>
              HtmlYoN === "Yes"
                ? `<${balise}>${sentence}</${balise}>`
                : sentence
            )}>
            <button>Copier</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Options;
