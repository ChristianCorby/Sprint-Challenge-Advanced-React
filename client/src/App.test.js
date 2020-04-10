import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Players from './players';
import useDarkMode from './useDarkMode';

it('Renders App without crashing', () => {
  render(<App />);
});