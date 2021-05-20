import { useState } from "react";
import { BsX } from "react-icons/bs";
import styled from "styled-components";

import {
  AutoCompleteContainer,
  AutoCompleteIcon,
  Input,
  AutoCompleteItem,
  AutoCompleteItemButton
} from "./styles";

const Root = styled.div`
  position: relative;
  width: 320px;
`;

export const AutoComplete = ({
  iconColor,
  data,
  style,
  placeholder,
  allowClear = false,
  onSearch = () => {},
  onSelect = () => {} 
}) => {
  const [ search, setSearch ] = useState({
    text: "",
    suggestions: []
  });

  const [ isDropdownVisible, setIsDropdownVisible ] = useState(true);

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter(v => regex.test(v.name));
    }
    setIsDropdownVisible(true);
    setSearch({ suggestions, text: value });
    onSearch(value);
  };

  const suggestionSelected = (value) => {
    setIsDropdownVisible(false);
    setSearch({
      text: value.name,
      suggestions: []
    });
    onSelect(value);
  };

  const clearText = () => {
    setSearch({ text: "", suggestions: [] });
  }

  const { suggestions } = search;

  return (
    <Root style={style}>
      <div
        onClick={() => setIsDropdownVisible(false)}
        style={{
          display: isDropdownVisible ? "block" : "none",
          width: "200vw",
          height: "200vh",
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0
        }}
      />
      <div>
        <Input
          id = "input"
          autoComplete = "off"
          value = {search.text}
          onChange = {onTextChanged}
          type = "text"
          placeholder = {placeholder}
        />
        <AutoCompleteIcon allowClear={allowClear} color={iconColor} isOpen={isDropdownVisible}>
          <BsX onClick={clearText} />
        </AutoCompleteIcon>
      </div>
      {suggestions.length > 0 && isDropdownVisible && (
        <AutoCompleteContainer>
          {suggestions.map(item => (
            <AutoCompleteItem key={item.code}>
              <AutoCompleteItemButton
                key={item.code}
                onClick={() => suggestionSelected(item)}
              >
                {item.name}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};
