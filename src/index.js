import { render } from "react-dom";
import { AutoComplete } from "./autocomplete";
import data from "./mocks/data.json";

const rootElement = document.getElementById("root");

const onSearch = (d) => {
  console.log(d);
}

const onSelect = (d) => {
  console.log('d: ', d);
}

render(
  <>
    <h2>Auto Complete Using React</h2>
    <AutoComplete
      placeholder = "input here"
      style = {{}}
      data = {data}
      iconColor = ""
      onSearch = {onSearch}
      onSelect = {onSelect}
    />
  </>,
  rootElement
);
