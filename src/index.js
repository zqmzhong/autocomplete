import { render } from "react-dom";
import { AutoComplete } from "./autocomplete";

const rootElement = document.getElementById("root");

render(
  <>
    <h2>Auto Complete Using React</h2>
    <AutoComplete
      style={{
  
      }}
      iconColor="blue"
    />
  </>,
  rootElement
);
