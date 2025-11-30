// this is the Name.jsx file

import "../styles/variables.css";
import "../styles/colors.css";

function Palette({ palette }: { palette: string }) {
  if (palette === "colors") {
    let colors = [
      "cherry",
    ];
    // return colors;
    return (
      <div className="palette">
        {colors.map((color) => (
          <div className={`color ${color}`} key={color}>
            {color}
          </div>
        ))}
      </div>
    );
  } else if (palette === "neutrals") {
    let colors = [
      "black-metal",
      "black-out",
      "raven-black",
      "industrial-revolution",
      "grey",
      "cold-grey",
      "tin-soldier",
      "kingly-cloud",
      "brilliance"
    ];
    return (
      <div className="palette">
        {colors.map((color) => (
          <div className={`color ${color}`} key={color}>
            {color}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export const Colors = () => {
  return (
    <div className="colors">
      <section>
        <h1>Color Palette</h1>
        <Palette palette="colors" />

        <h2>Neutrals Palette</h2>
        <Palette palette="neutrals" />
      </section>

      <hr />

      <div className='body'>
        body
      </div>
    </div>
  );
};