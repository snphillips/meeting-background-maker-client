import React from 'react';
import { render, screen, findByText, getByText, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';
import CuratedSetsComponent from './CuratedSetsComponent';

// Curated Sets
import cocktailHour from '../CuratedSets/cocktailHour.js';
import colorTheory from '../CuratedSets/colorTheory.js';
import gardenParty from '../CuratedSets/gardenParty.js';
import gourmet from '../CuratedSets/gourmet.js';
import hermanMillerPicnic from '../CuratedSets/hermanMillerPicnic.js';
import photoMural from '../CuratedSets/photoMural.js';
import kolomanMoser from '../CuratedSets/kolomanMoser';

const curatedSets = [
  cocktailHour,
  colorTheory,
  gardenParty,
  gourmet,
  hermanMillerPicnic,
  photoMural,
  kolomanMoser,
];

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

  // curatedSets.map((set, index) => {
  //   it('uses correct src', async () => {
  //     render(component);
  //     console.log('set', set);
  //     // const image = getByAltText();
  //     // expect(image.src).toContain('the_url');
  //   });
  // });
});
