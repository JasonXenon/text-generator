import React from "react";

const Output = (props) => {
  const { paragraphes, balise, HtmlYoN } = props;

  return (
    <div className="sortie">
      {HtmlYoN === "Yes" ? (
        <p>
          {paragraphes.map((sentence) => `<${balise}>${sentence}</${balise}>`)}
        </p>
      ) : (
        <p>{paragraphes.map((sentence) => sentence)}</p>
      )}
    </div>
  );
};

export default Output;
