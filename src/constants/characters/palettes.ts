import { Palette } from '@/components/characterPage/Palette';
import { translate } from '@docusaurus/Translate';

export const FOX_PALETTE: Palette = new Map([
  [
    translate({ id: 'theme.characterPage.palette.cloth' }),
    {
      colors: ['#5b3125', '#86735a', '#3c5451'],
      gradient:
        'linear-gradient(90deg, rgba(91, 49, 37, 1) 0%, rgba(134, 115, 90, 1) 50%, rgba(60, 84, 81, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.body' }),
    {
      colors: ['#bc5a30', '#e3b68e', '#ed9d32'],
      gradient:
        'linear-gradient(90deg, rgba(188, 90, 48, 1) 0%, rgba(227, 182, 142, 1) 50%, rgba(237, 157, 50, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.mood' }),
    {
      colors: ['#a3b7ca', '#879e82', '#202020'],
      gradient:
        'linear-gradient(90deg, rgba(163, 183, 202, 1) 0%, rgba(135, 158, 130, 1) 50%, rgba(32, 32, 32, 1) 100%)',
    },
  ],
]);

export const JETT_PALETTE: Palette = new Map([
  [
    translate({ id: 'theme.characterPage.palette.cloth' }),
    {
      colors: ['#FFFFFF', '#381f07', '#000000'],
      gradient:
        'radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(56, 31, 7, 1) 50%, rgba(0, 0, 0, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.body' }),
    {
      colors: ['#f2d4b8', '#000000', '#6abaa7'],
      gradient:
        'radial-gradient(circle,rgba(242, 212, 184, 1) 0%, rgba(106, 186, 167, 1) 50%, rgba(0, 0, 0, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.mood' }),
    {
      colors: ['#d11f2b', '#f05f22', '#d6c6bf'],
      gradient:
        'radial-gradient(circle,rgba(209, 31, 43, 1) 0%, rgba(240, 95, 34, 1)  50%, rgba(214, 198, 191, 1) 100%',
    },
  ],
]);

export const DANE_PALETTE: Palette = new Map([
  [
    translate({ id: 'theme.characterPage.palette.cloth' }),
    {
      colors: ['#330e05', '#333333', '#0b0a29'],
      gradient:
        'linear-gradient(90deg,rgba(51, 14, 5, 1) 0%, rgba(51, 51, 51, 1) 50%, rgba(11, 10, 41, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.body' }),
    {
      colors: ['#000000', '#96744e'],
      gradient:
        'linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(150, 116, 78, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.mood' }),
    {
      colors: ['#797979', '#a9d7fa', '#ffffff'],
      gradient:
        'linear-gradient(90deg,rgba(121, 121, 121, 1) 0%, rgba(169, 215, 250, 1) 50%, rgba(255, 255, 255, 1) 100%)',
    },
  ],
]);

export const REESE_PALETTE: Palette = new Map([
  [
    translate({ id: 'theme.characterPage.palette.cloth' }),
    {
      colors: ['#0CB7FA', '#073763', '#0B420B'],
      gradient:
        'linear-gradient(90deg,rgba(12, 183, 250, 1) 0%, rgba(7, 55, 99, 1) 50%, rgba(11, 66, 11, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.body' }),
    {
      colors: ['#D1B6A3', '#F1D69F', '#91A9B8'],
      gradient:
        'linear-gradient(90deg,rgba(209, 182, 163, 1) 0%, rgba(241, 214, 159, 1) 50%, rgba(145, 169, 184, 1) 100%)',
    },
  ],
  [
    translate({ id: 'theme.characterPage.palette.mood' }),
    {
      colors: ['#EEAECA', '#F2BBA0', '#D1E9FF'],
      gradient:
        'radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(242, 187, 160, 1) 50%, rgba(209, 233, 255, 1) 100%)',
    },
  ],
]);
