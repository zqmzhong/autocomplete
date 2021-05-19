import React from 'react';
import { action } from '@storybook/addon-actions';
import { AutoComplete } from "../autocomplete";
import data from "../mocks/data.json";

export default {
  title: 'AutoComplete',
  component: AutoComplete,
};

export const Basic = () => (
  <AutoComplete
    placeholder = "input here"
    style = {{}}
    data = {data}
    iconColor = ""
    onSearch = {action("onSearch")}
    onSelect = {action("onSelect")}
  />
);
