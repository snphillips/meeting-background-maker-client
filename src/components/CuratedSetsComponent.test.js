import React from 'react';
import { render, screen, findByText, getByText, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';
import CuratedSetsComponent from './CuratedSetsComponent';

// Curated Sets
import cocktailHour from '../CuratedSets/cocktailHour';
import colorTheory from '../CuratedSets/colorTheory';
import gardenParty from '../CuratedSets/gardenParty';
import gourmet from '../CuratedSets/gourmet';
import hermanMillerPicnic from '../CuratedSets/hermanMillerPicnic';
import photoMural from '../CuratedSets/photoMural';
import kolomanMoser from '../CuratedSets/kolomanMoser';

const curatedSets = [cocktailHour, colorTheory, gardenParty, gourmet, hermanMillerPicnic, photoMural, kolomanMoser];

const headings = [
  'cocktail hour',
  'color theory',
  'garden party',
  'gourmet',
  'herman miller picnic',
  'photo mural',
  'Koloman Moser',
];

const component = <CuratedSetsComponent curatedSets={curatedSets} activeTab={1} />;

describe('CuratedSetsComponent component', () => {
  test('Renders the component', () => {
    render(component);
  });

  headings.map((theme, i) => {
    test('All the headings appears in the document', () => {
      render(component);
      const heading = screen.getByText(headings[(theme, i)]);
      expect(heading).toBeInTheDocument();
    });
  });

  test('download image set buttons appear in the document', () => {
    render(component);
    const buttons = screen.getAllByRole('button', 'download image set');
    expect(buttons[0]).toBeInTheDocument();
  });
});
