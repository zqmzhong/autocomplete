import React from 'react';
import { action } from '@storybook/addon-actions';
import AutoComplete from '../index';
import data from '../mocks/data.json';

export default {
    title: 'AutoComplete',
    component: AutoComplete,
};

export const Basic = () => (
    <AutoComplete placeholder="input here" data={data} onSearch={action('onSearch')} onSelect={action('onSelect')} />
);

export const WithClearIcon = () => (
    <AutoComplete
        placeholder="input here"
        data={data}
        allowClear={true}
        onSearch={action('onSearch')}
        onSelect={action('onSelect')}
    />
);
