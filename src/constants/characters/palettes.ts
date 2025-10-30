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
